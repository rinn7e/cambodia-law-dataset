module Component.Modal exposing (ModalType(..), modal, modalWrapper, view)

import Data.Emoji exposing (Subject)
import Html exposing (Html, button, div, p, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)


type ModalType
    = Search


type alias Config msg =
    { currentModal : Maybe ModalType
    , closeModal : msg
    , subjects : List Subject
    , onToggleSubject : Int -> msg
    }


view : Config msg -> Html msg
view config =
    case config.currentModal of
        Nothing ->
            text ""

        Just Search ->
            modalWrapper config.closeModal (modal (filterModalContent config))


modalWrapper : msg -> Html msg -> Html msg
modalWrapper closeMsg content =
    div []
        [ div [ class "fixed inset-0 bg-black/5 z-40 backdrop-blur-[2px]", onClick closeMsg ] []
        , div [ class "fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md" ]
            [ content ]
        ]


modal : List (Html msg) -> Html msg
modal content =
    div [ class "bg-white shadow-2xl rounded-3xl overflow-hidden p-8 flex flex-col items-center gap-8 border border-gray-100 font-sans" ]
        content


filterModalContent : Config msg -> List (Html msg)
filterModalContent config =
    [ p [ class "font-bold text-lg mb-4" ] [ text "ស្វែងរកតាមប្រធានបទ" ]
    , div [ class "grid grid-cols-4 gap-2 w-full" ]
        (config.subjects
            |> List.indexedMap
                (\i s ->
                    button
                        [ class <|
                            "flex flex-col items-center p-3 rounded-2xl transition-colors cursor-pointer "
                                ++ (if s.selected then
                                        "bg-black text-white"

                                    else
                                        "bg-gray-50 hover:bg-gray-100"
                                   )
                        , onClick <| config.onToggleSubject i
                        ]
                        [ div [ class "text-2xl mb-1" ] [ text s.code ]
                        , div [ class "text-[10px] uppercase tracking-tighter" ] [ text s.label ]
                        ]
                )
        )
    ]
