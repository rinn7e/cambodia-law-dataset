module Component.Navbar exposing (view)

import Html exposing (Html, a, div, text)
import Html.Attributes exposing (class, href)


type alias Config =
    { currentRoute : String
    }


view : Config -> Html msg
view config =
    div [ class "flex flex-wrap justify-center gap-6 mb-12 text-sm font-sans uppercase tracking-widest text-gray-500" ]
        [ navLink "/" "Home" (config.currentRoute == "/")
        , navLink "/laws" "Laws" (config.currentRoute == "/laws")
        , navLink "/bookmarks" "Bookmarks" (config.currentRoute == "/bookmarks")
        , navLink "/about" "About" (config.currentRoute == "/about")
        ]


navLink : String -> String -> Bool -> Html msg
navLink url label isActive =
    a
        [ href url
        , class <|
            "no-underline hover:text-black transition-colors "
                ++ (if isActive then
                        "text-black font-bold border-b-2 border-black"

                    else
                        ""
                   )
        ]
        [ text label ]
