module Data.Laws exposing (Law, availableLaws)


type alias Law =
    { id : String
    , name : String
    , description : String
    , icon : String
    }


availableLaws : List Law
availableLaws =
    [ { id = "law1"
      , name = "រដ្ឋធម្មនុញ្ញ"
      , description = "ច្បាប់កំពូលនៃព្រះរាជាណាចក្រកម្ពុជា"
      , icon = "🇰🇭"
      }
    , { id = "law2"
      , name = "ច្បាប់គំរូទី ២"
      , description = "មាត្រាសាកល្បងសម្រាប់បង្ហាញមុខងារពហុច្បាប់"
      , icon = "⚖️"
      }
    ]
