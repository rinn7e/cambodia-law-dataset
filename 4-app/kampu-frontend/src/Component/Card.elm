module Component.Card exposing (articleCard, bookmarkIcon)

import Html exposing (Html, button, div, hr, span, text)
import Html.Attributes exposing (class, title)
import Html.Events exposing (onClick)
import Svg exposing (path, svg)
import Svg.Attributes as SvgAttr


articleCard : { isBookmarked : Bool, onToggleBookmark : msg } -> { a | index : Int, content : String, tags : List String } -> Html msg
articleCard config a =
    div [ class "relative group" ]
        [ div [ class "flex items-center gap-6 mb-4 opacity-30 group-hover:opacity-60 transition-opacity" ]
            [ hr [ class "grow border-gray-300" ] []
            , span [ class "px-4 font-mono text-sm" ] [ text <| "មាត្រា " ++ String.fromInt a.index ]
            , hr [ class "grow border-gray-300" ] []
            ]
        , div [ class "text-xl leading-relaxed text-center mb-6 px-4 font-serif" ]
            [ text a.content ]
        , div [ class "flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8 font-sans" ]
            (List.map (\t -> span [ class "px-3 py-1 bg-gray-100 rounded-full" ] [ text t ]) a.tags)
        , button
            [ onClick config.onToggleBookmark
            , class "absolute -right-4 top-8 p-3 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
            , title
                (if config.isBookmarked then
                    "យកចេញពីចំណាំ"

                 else
                    "បន្ថែមទៅក្នុងចំណាំ"
                )
            ]
            [ bookmarkIcon config.isBookmarked ]
        ]


bookmarkIcon : Bool -> Html msg
bookmarkIcon active =
    svg
        [ SvgAttr.viewBox "0 0 24 24"
        , SvgAttr.fill
            (if active then
                "black"

             else
                "none"
            )
        , SvgAttr.stroke "currentColor"
        , SvgAttr.strokeWidth "1.5"
        , SvgAttr.class "w-5 h-5"
        ]
        [ path
            [ SvgAttr.strokeLinecap "round"
            , SvgAttr.strokeLinejoin "round"
            , SvgAttr.d "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            ]
            []
        ]
