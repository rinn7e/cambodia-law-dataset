module Data.Law2.Chapter exposing (..)


type alias Chapter =
    { index : Int
    , name : String
    , description : Maybe String
    , isNew : Bool
    }


chapters : List Chapter
chapters =
    [ { index = 1
      , name = "ជំពូកទី ១៖ បទបញ្ញត្តិទូទៅ"
      , description = Just "ជំពូកនេះកំណត់អំពីគោលបំណង និងវិសាលភាពនៃច្បាប់។"
      , isNew = False
      }
    , { index = 2
      , name = "ជំពូកទី ២៖ ការគ្រប់គ្រង និងការអនុវត្ត"
      , description = Just "ការពិពណ៌នាអំពីយន្តការក្នុងការអនុវត្តច្បាប់នេះឱ្យមានប្រសិទ្ធភាព។"
      , isNew = False
      }
    ]
