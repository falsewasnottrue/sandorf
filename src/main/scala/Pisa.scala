object Pisa extends App {

  println("Pisa")

  val a = List(1,4,1,3,1).map(_ - 1)
  val b = List(2,5,6,2,1).map(_ - 1)

  val target = 49057

  val result = for {
    List(x1,x2,x3,x4,x5) <- a.permutations
    List(y1,y2,y3,y4,y5) <- b.permutations
    n = 10000*x1 + 1000*x2 + 100*x3 + 10*x4 + x5
    e = 10000*y1 + 1000*y2 + 100*y3 + 10*y4 + y5

    if n+e == target
  } yield (n,e)

  println(result.toList)
}
