module Page.LawDetail exposing (Config, view)

import Component.Card as Card
import Data.Emoji exposing (Subject)
import Data.Law1.Article as Law1A
import Data.Law1.Chapter as Law1C
import Data.Law2.Article as Law2A
import Data.Law2.Chapter as Law2C
import Html exposing (Html, button, div, h2, hr, p, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Set exposing (Set)


type alias Config msg =
    { subjects : List Subject
    , bookmarks : Set String
    , onToggleBookmark : String -> msg
    , onOpenFilter : msg
    , showFilter : Bool
    }


view : String -> Config msg -> Html msg
view lawId config =
    let
        ( chapters, articles ) =
            case lawId of
                "law1" ->
                    ( Law1C.chapters, Law1A.articles )

                "law2" ->
                    ( Law2C.chapters, Law2A.articles )

                _ ->
                    ( [], [] )

        filteredArticles =
            articles
                |> List.filter
                    (\a ->
                        let
                            selectedSub =
                                config.subjects
                                    |> List.filter .selected
                                    |> List.map .code
                        in
                        if List.isEmpty selectedSub then
                            True

                        else
                            List.all (\code -> List.member code a.tags) selectedSub
                    )

        chapterGroups =
            chapters
                |> List.filterMap
                    (\chapter ->
                        let
                            chapterArticles =
                                filteredArticles |> List.filter (\a -> a.chapterIndex == chapter.index)
                        in
                        if List.isEmpty chapterArticles then
                            Nothing

                        else
                            Just ( chapter, chapterArticles )
                    )
    in
    div [ class "relative space-y-16" ]
        [ if List.isEmpty chapterGroups then
            div [ class "text-center py-20 text-gray-400" ] [ text "មិនមានលទ្ធផល" ]

          else
            div [ class "space-y-24" ] <|
                List.map (\( chapter, chapterArticles ) -> chapterView lawId config chapter chapterArticles) chapterGroups
        , -- Floating Filter Button
          button
            [ class "fixed bottom-8 left-1/2 -translate-x-1/2 p-4 bg-black text-white rounded-full shadow-2xl transition-all duration-300 transform z-10 cursor-pointer"
            , class
                (if config.showFilter then
                    "translate-y-0 opacity-100"

                 else
                    "translate-y-24 opacity-0 pointer-events-none"
                )
            , onClick config.onOpenFilter
            ]
            [ filterIcon ]
        ]


filterIcon : Html msg
filterIcon =
    Html.span [ class "flex items-center gap-2 px-2" ]
        [ text "🔍 Filter" ]


chapterView : String -> Config msg -> { index : Int, name : String, description : Maybe String, isNew : Bool } -> List { index : Int, isNew : Bool, content : String, referenceNumber : Int, chapterIndex : Int, tags : List String } -> Html msg
chapterView lawId config chapter chapterArticles =
    div [ class "space-y-12" ]
        [ div [ class "text-center space-y-4" ]
            [ div [ class "text-xs font-sans uppercase tracking-[0.3em] text-gray-400" ]
                [ text <| "ជំពូកទី " ++ String.fromInt chapter.index ]
            , h2 [ class "text-xl font-bold text-black font-serif" ]
                [ text chapter.name ]
            , case chapter.description of
                Just desc ->
                    p [ class "text-sm text-gray-500 italic max-w-lg mx-auto font-sans" ] [ text desc ]

                Nothing ->
                    text ""
            , hr [ class "w-12 mx-auto border-black" ] []
            ]
        , div [ class "space-y-16" ] <|
            List.map
                (\a ->
                    let
                        bookmarkKey =
                            lawId ++ ":" ++ String.fromInt a.index
                    in
                    Card.articleCard
                        { isBookmarked = Set.member bookmarkKey config.bookmarks
                        , onToggleBookmark = config.onToggleBookmark bookmarkKey
                        }
                        a
                )
                chapterArticles
        ]
