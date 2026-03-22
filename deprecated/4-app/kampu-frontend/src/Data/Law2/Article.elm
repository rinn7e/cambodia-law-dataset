module Data.Law2.Article exposing (..)


type alias Article =
    { index : Int
    , isNew : Bool
    , content : String
    , referenceNumber : Int
    , chapterIndex : Int
    , tags : List String
    }


articles : List Article
articles =
    [ { index = 1
      , isNew = False
      , content = "នេះគឺជាមាត្រាទី ១ នៃច្បាប់គំរូទី ២។ វាមានបំណងបង្ហាញពីរបៀបដែលប្រព័ន្ធអាចគ្រប់គ្រងច្បាប់ច្រើនប្លែកគ្នា។"
      , referenceNumber = 101
      , chapterIndex = 1
      , tags = [ "⚖️", "📖" ]
      }
    , { index = 2
      , isNew = True
      , content = "មាត្រាទី ២ ផ្ដល់នូវព័ត៌មានបន្ថែមអំពីបញ្ញត្តិថ្មីៗ ដែលត្រូវបានដាក់បញ្ចូលក្នុងកំណែចុងក្រោយនៃច្បាប់នេះ។"
      , referenceNumber = 102
      , chapterIndex = 1
      , tags = [ "✨", "🆕" ]
      }
    , { index = 3
      , isNew = False
      , content = "ខ្លឹមសារនៃមាត្រាទី ៣ ផ្តោតលើការអនុវត្តច្បាប់ក្នុងកម្រិតថ្នាក់ក្រោមជាតិ និងតួនាទីរបស់អាជ្ញាធរមូលដ្ឋាន។"
      , referenceNumber = 103
      , chapterIndex = 2
      , tags = [ "🏛️", "📍" ]
      }
    ]
