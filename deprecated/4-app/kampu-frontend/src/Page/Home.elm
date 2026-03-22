module Page.Home exposing (view)

import Html exposing (Html, a, div, h2, h3, p, section, text)
import Html.Attributes exposing (class, href)


view : Html msg
view =
    div [ class "space-y-12" ]
        [ section [ class "text-center space-y-4" ]
            [ h2 [ class "text-2xl font-bold" ] [ text "សូមស្វាគមន៍មកកាន់ Kampu Law" ]
            , p [ class "text-gray-600 italic" ] [ text "ស្វែងយល់ពីច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា" ]
            ]
        , section [ class "grid grid-cols-1 md:grid-cols-2 gap-6" ]
            [ dashboardCard "/laws" "⚖️" "ច្បាប់ទាំងអស់" "មើលបញ្ជីច្បាប់ និងមាត្រាទាំងអស់"
            , dashboardCard "/bookmarks" "🔖" "ចំណាំរបស់អ្នក" "មើលមាត្រាដែលអ្នកបានរក្សាទុក"
            ]
        ]


dashboardCard : String -> String -> String -> String -> Html msg
dashboardCard url icon title desc =
    a [ href url, class "block p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow no-underline text-inherit" ]
        [ div [ class "text-4xl mb-4" ] [ text icon ]
        , h3 [ class "text-xl font-bold mb-2 font-serif" ] [ text title ]
        , p [ class "text-gray-500 text-sm font-sans" ] [ text desc ]
        ]
