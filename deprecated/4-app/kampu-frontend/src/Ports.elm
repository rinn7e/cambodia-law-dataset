port module Ports exposing (..)


port scrollToId : String -> Cmd msg


port saveBookmarks : List String -> Cmd msg


port onBookmarksUpdate : (List String -> msg) -> Sub msg


port onScroll : (Int -> msg) -> Sub msg
