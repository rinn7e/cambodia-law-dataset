module Page.Bookmarks exposing (view)

import Component.Card as Card
import Data.AllLaws exposing (allArticles)
import Html exposing (Html, div, h2, text)
import Html.Attributes exposing (class)
import Set exposing (Set)


type alias Config msg =
    { bookmarks : Set String
    , onToggleBookmark : String -> msg
    }


view : Config msg -> Html msg
view config =
    let
        bookmarkedArticles =
            allArticles
                |> List.filter (\a -> Set.member (a.lawId ++ ":" ++ String.fromInt a.index) config.bookmarks)
    in
    div [ class "space-y-16" ]
        [ h2 [ class "text-2xl font-bold text-center mb-12 font-serif" ] [ text "ចំណាំរបស់ខ្ញុំ" ]
        , if List.isEmpty bookmarkedArticles then
            div [ class "text-center py-20 text-gray-400 italic font-sans" ] [ text "អ្នកមិនទាន់មានចំណាំនៅឡើយទេ" ]

          else
            div [ class "space-y-24" ] <|
                List.map
                    (\a ->
                        let
                            key =
                                a.lawId ++ ":" ++ String.fromInt a.index
                        in
                        Card.articleCard
                            { isBookmarked = True
                            , onToggleBookmark = config.onToggleBookmark key
                            }
                            a
                    )
                    bookmarkedArticles
        ]
