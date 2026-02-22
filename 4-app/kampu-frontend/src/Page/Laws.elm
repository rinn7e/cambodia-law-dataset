module Page.Laws exposing (view)

import Data.Laws exposing (Law, availableLaws)
import Html exposing (Html, a, div, h1, h2, p, text)
import Html.Attributes exposing (class, href)


view : Html msg
view =
    div [ class "space-y-12" ]
        [ div [ class "text-center space-y-4" ]
            [ h1 [ class "text-3xl font-bold font-serif" ] [ text "បញ្ជីច្បាប់" ]
            , p [ class "text-gray-500 font-sans" ] [ text "សូមជ្រើសរើសច្បាប់ណាមួយដើម្បីមើលសេចក្តីលម្អិត" ]
            ]
        , div [ class "grid grid-cols-1 md:grid-cols-2 gap-6" ] <|
            List.map lawCard availableLaws
        ]


lawCard : Law -> Html msg
lawCard law =
    a
        [ href ("/laws/" ++ law.id)
        , class "group block p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        ]
        [ div [ class "flex items-start space-x-4" ]
            [ div [ class "text-4xl" ] [ text law.icon ]
            , div [ class "space-y-2" ]
                [ h2 [ class "text-xl font-bold font-serif group-hover:text-blue-600 transition-colors" ] [ text law.name ]
                , p [ class "text-sm text-gray-500 font-sans line-clamp-2" ] [ text law.description ]
                ]
            ]
        ]
