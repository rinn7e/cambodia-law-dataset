module Main exposing (main)

import Browser exposing (Document, UrlRequest)
import Browser.Navigation as Nav
import Component.Logo as Logo
import Component.Modal as Modal exposing (ModalType(..))
import Component.Navbar as Navbar
import Data.Emoji exposing (subjects)
import Html exposing (Html, div, h2, text)
import Html.Attributes exposing (class)
import Page.About as About
import Page.Bookmarks as Bookmarks
import Page.Home as Home
import Page.LawDetail
import Page.Laws as Laws
import Ports
import Set exposing (Set)
import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser, s, top)



-- ROUTING


type Route
    = Home
    | Laws
    | LawDetail String
    | Bookmarks
    | About
    | NotFound


routeParser : Parser (Route -> a) a
routeParser =
    Parser.oneOf
        [ Parser.map Home top
        , Parser.map Laws (s "laws")
        , Parser.map LawDetail (s "laws" </> Parser.string)
        , Parser.map Bookmarks (s "bookmarks")
        , Parser.map About (s "about")
        ]


fromUrl : Url -> Route
fromUrl url =
    Parser.parse routeParser url
        |> Maybe.withDefault NotFound



-- MODEL


type Modal
    = Search


type alias Model =
    { key : Nav.Key
    , url : Url
    , route : Route
    , modal : Maybe Modal
    , subjects : List Data.Emoji.Subject
    , bookmarks : Set String
    , lastScrollY : Int
    , showFilter : Bool
    }


type alias Flags =
    { bookmarks : List String }


init : Flags -> Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    let
        model =
            { key = key
            , url = url
            , route = fromUrl url
            , modal = Nothing
            , subjects = subjects
            , bookmarks = Set.fromList flags.bookmarks
            , lastScrollY = 0
            , showFilter = True
            }
    in
    ( model, Cmd.none )



-- UPDATE


type Msg
    = OnUrlRequest UrlRequest
    | OnUrlChange Url
    | SetModal (Maybe Modal)
    | ScrollToStart
    | ToggleSubject Int
    | ToggleBookmark String
    | GotBookmarks (List String)
    | OnScroll Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnUrlRequest urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        OnUrlChange url ->
            ( { model | url = url, route = fromUrl url }, Cmd.none )

        SetModal val ->
            ( { model | modal = val }, Cmd.none )

        ScrollToStart ->
            ( model, Ports.scrollToId "app" )

        ToggleSubject i ->
            let
                updatedSubjects =
                    List.indexedMap
                        (\idx s ->
                            if idx == i then
                                { s | selected = not s.selected }

                            else
                                s
                        )
                        model.subjects
            in
            ( { model | subjects = updatedSubjects }, Cmd.none )

        ToggleBookmark id ->
            let
                newBookmarks =
                    if Set.member id model.bookmarks then
                        Set.remove id model.bookmarks

                    else
                        Set.insert id model.bookmarks
            in
            ( { model | bookmarks = newBookmarks }
            , Ports.saveBookmarks (Set.toList newBookmarks)
            )

        GotBookmarks list ->
            ( { model | bookmarks = Set.fromList list }, Cmd.none )

        OnScroll currentY ->
            let
                isScrollingDown =
                    currentY > model.lastScrollY && currentY > 100

                -- Only hide if we've scrolled a bit
                shouldShow =
                    not isScrollingDown || currentY < 100
            in
            ( { model | lastScrollY = currentY, showFilter = shouldShow }, Cmd.none )



-- VIEW


view : Model -> Document Msg
view model =
    { title = "Kampu Law"
    , body =
        [ div [ class "min-h-screen bg-[#fafafa] font-serif text-[#333] selection:bg-yellow-200" ]
            [ layout model (pageContent model)
            , Modal.view
                { currentModal =
                    model.modal
                        |> Maybe.map
                            (\m ->
                                case m of
                                    Search ->
                                        Modal.Search
                            )
                , closeModal = SetModal Nothing
                , subjects = model.subjects
                , onToggleSubject = ToggleSubject
                }
            ]
        ]
    }


layout : Model -> Html Msg -> Html Msg
layout model content =
    div [ class "max-w-3xl mx-auto pb-32 pt-12 px-6" ]
        [ Logo.view
        , Navbar.view
            { currentRoute = model.url.path
            }
        , content
        ]


pageContent : Model -> Html Msg
pageContent model =
    case model.route of
        Home ->
            Home.view

        Laws ->
            Laws.view

        LawDetail lawId ->
            let
                detailConfig =
                    { subjects = model.subjects
                    , bookmarks = model.bookmarks
                    , onToggleBookmark = ToggleBookmark
                    , onOpenFilter = SetModal (Just Search)
                    , showFilter = model.showFilter
                    }
            in
            Html.map (\msg -> msg) (Page.LawDetail.view lawId detailConfig)

        Bookmarks ->
            Bookmarks.view
                { bookmarks = model.bookmarks
                , onToggleBookmark = ToggleBookmark
                }

        About ->
            About.view

        NotFound ->
            div [ class "text-center py-20" ] [ h2 [] [ text "៤០៤ - រកមិនឃើញ" ] ]


text : String -> Html msg
text =
    Html.text


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ Ports.onBookmarksUpdate GotBookmarks
        , Ports.onScroll OnScroll
        ]


main : Program Flags Model Msg
main =
    Browser.application
        { init = init
        , onUrlRequest = OnUrlRequest
        , onUrlChange = OnUrlChange
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
