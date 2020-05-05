object Nachtmusik extends App {

  val res = for {
    b <- 13 until 100
    a = b - 13

    x = 14*b + 4
    if (x >= 100 && x < 1000)
    y = a*b - 8*(a+b) - 25
    if (y >= 100 && y < 1000)

    c = s"N52 30.$x E013 32.$y"
  } yield (a,b,c)

  res.foreach(println)
}
