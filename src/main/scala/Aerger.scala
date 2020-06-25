object Aerger extends App {

  private def s(i: Int): Boolean = 0 <= i && i <= 9

  val res = for {
    g <- 7 to 9
    r <- 0 to 9
    y <- 0 to 9
    if s(y-r)
    if s(r+g-2*y)
    b <- 0 to 9
    if s(y-b)
    if s(g+b-3*r)
    if s(b+y-g)

    k = s"N52 2$g.$r${r+g-2*y}${y-b} E013 3${y-r}.${g+b-3*r}$r${b+y-g}"
  } yield (g,r,y,b,k)

  println(res.size)
  res.foreach(x => println(x._5))
}
