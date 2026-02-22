module Page.About exposing (view)

import Html exposing (Html, div, img, p, text)
import Html.Attributes exposing (class, src)
import VitePluginHelper


view : Html msg
view =
    div [ class "space-y-12 max-w-lg mx-auto py-8" ]
        [ div [ class "text-center space-y-6" ]
            [ p [ class "text-2xl font-bold font-serif" ] [ text "គាំទ្រការងាររបស់យើង" ]
            , p [ class "text-gray-500 font-sans leading-relaxed" ]
                [ text "ប្រសិនបើអ្នកយល់ថាគម្រោងនេះមានប្រយោជន៍ អ្នកអាចជួយគាំទ្រពួកយើងតាមរយៈការស្កេន QR Code ខាងក្រោម។" ]
            ]
        , div [ class "flex justify-center" ]
            [ img
                [ src <| VitePluginHelper.asset "/src/assets/qr.jpg"
                , class "w-64 rounded-3xl shadow-2xl border-8 border-white bg-gray-50"
                ]
                []
            ]
        , div [ class "text-center space-y-2 pt-8 border-t border-gray-100" ]
            [ div [ class "text-lg font-bold font-serif" ] [ text "បង្កើតដោយ rinn7e" ]
            , div [ class "text-sm text-gray-400 font-sans italic" ] [ text "សូមអរគុណសម្រាប់ការគាំទ្រ និងការប្រើប្រាស់!" ]
            ]
        ]
