BEGIN{
  FS="."
  print " [ "
}
# {print $1}
{
  print "  { name: \"" $1 "\", thumb: \"/assets/thumb/" $1 ".jpg\", medium: \"/assets/medium/" $1 ".jpg\", full: \"/assets/full/" $1 ".jpg\" },"
}
END{print " ] "}
