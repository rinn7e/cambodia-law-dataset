module Component.Logo exposing (logo, logoText, view)

import Html exposing (Html, div, h1, text)
import Html.Attributes exposing (class)
import Svg exposing (path, svg)
import Svg.Attributes as SvgAttr


view : Html msg
view =
    div [ class "flex flex-col items-center mb-16" ]
        [ logo
        , logoText
        ]


logo : Html msg
logo =
    svg
        [ SvgAttr.fill "none"
        , SvgAttr.viewBox "0 0 24 24"
        , SvgAttr.strokeWidth "1"
        , SvgAttr.stroke "currentColor"
        , SvgAttr.class "text-black w-20 h-20 mb-4"
        ]
        [ path
            [ SvgAttr.strokeLinecap "round"
            , SvgAttr.strokeLinejoin "round"
            , SvgAttr.d "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            ]
            []
        ]


logoText : Html msg
logoText =
    div [ class "text-center tracking-[0.2em] font-sans uppercase" ]
        [ h1 [ class "text-3xl font-light m-0" ]
            [ div [] [ text "Kampu" ]
            , div [ class "text-sm text-gray-400 mt-1" ] [ text "Law Explorer" ]
            ]
        ]
