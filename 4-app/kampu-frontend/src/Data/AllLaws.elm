module Data.AllLaws exposing (Article, Chapter, allArticles, findArticle)

import Data.Law1.Article as Law1A
import Data.Law2.Article as Law2A


type alias Article =
    { lawId : String
    , index : Int
    , isNew : Bool
    , content : String
    , referenceNumber : Int
    , chapterIndex : Int
    , tags : List String
    }


type alias Chapter =
    { lawId : String
    , index : Int
    , name : String
    , description : Maybe String
    , isNew : Bool
    }


allArticles : List Article
allArticles =
    List.map fromLaw1 Law1A.articles
        ++ List.map fromLaw2 Law2A.articles


fromLaw1 : Law1A.Article -> Article
fromLaw1 a =
    { lawId = "law1"
    , index = a.index
    , isNew = a.isNew
    , content = a.content
    , referenceNumber = a.referenceNumber
    , chapterIndex = a.chapterIndex
    , tags = a.tags
    }


fromLaw2 : Law2A.Article -> Article
fromLaw2 a =
    { lawId = "law2"
    , index = a.index
    , isNew = a.isNew
    , content = a.content
    , referenceNumber = a.referenceNumber
    , chapterIndex = a.chapterIndex
    , tags = a.tags
    }


findArticle : String -> Maybe Article
findArticle key =
    case String.split ":" key of
        [ lawId, indexStr ] ->
            let
                index =
                    String.toInt indexStr |> Maybe.withDefault -1
            in
            allArticles |> List.filter (\a -> a.lawId == lawId && a.index == index) |> List.head

        _ ->
            Nothing
