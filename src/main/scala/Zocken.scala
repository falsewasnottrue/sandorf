case class Seat(name: String) {
  var left: Seat = null
  var right: Seat = null
}

sealed trait Player {
  val name: String
  val male: Boolean
}
case object G extends Player {
  val name = "Gertrud"
  val male = false
}
case object R extends Player {
  val name = "Rosalinde"
  val male = false
}
case object W extends Player {
  val name = "Walburga"
  val male = false
}
case object A extends Player {
  val name = "Andreas"
  val male = true
}
case object F extends Player {
  val name = "Franz"
  val male = true
}
case object H extends Player {
  val name = "Harald"
  val male = true
}

object Zocken extends App {
  val players = List(G,R,W,A,F,H)

  val seatA = Seat("A")
  val seatB = Seat("B")
  val seatC = Seat("C")
  val seatD = Seat("D")
  val seatE = Seat("E")
  val seatF = Seat("F")
  // TODO left right

  val wuerfe = List(1,2,3,4,5,6)
  val combinations = for {
    a1 <- wuerfe
    a2 <- wuerfe
    if (a2 != a1)
    a3 <- wuerfe
    if (a3 != a2 && a3 != a1)
    a4 <- wuerfe
    if (a4 != a3 && a4 != a2 && a4 != a1)
    a5 <- wuerfe
    if (a5 != a4 && a5 != a3 && a5 != a2 && a5 != a1)
    a6 <- wuerfe
    if (a6 != a5 && a6 != a4 && a6 != a3 && a6 != a2 && a6 != a1)
  } yield (a1,a2,a3,a4,a5,a6)

  println(combinations.size)

  val sums = for {
    (a1,b1,c1,d1,e1,f1) <- combinations
    (a2,b2,c2,d2,e2,f2) <- combinations

    // gleiche kombination nur einmal
    if (a1==a2 && b1!= b2 && c1!=c2 && d1!=d2 && e1!=e2 && f1!=f2) ||
      (a1!=a2 && b1== b2 && c1!=c2 && d1!=d2 && e1!=e2 && f1!=f2) ||
      (a1!=a2 && b1!= b2 && c1==c2 && d1!=d2 && e1!=e2 && f1!=f2) ||
      (a1!=a2 && b1!= b2 && c1!=c2 && d1==d2 && e1!=e2 && f1!=f2) ||
      (a1!=a2 && b1!= b2 && c1!=c2 && d1!=d2 && e1==e2 && f1!=f2) ||
      (a1!=a2 && b1!= b2 && c1!=c2 && d1!=d2 && e1!=e2 && f1==f2)

    (s1,s2,s3,s4,s5,s6) = (a1+a2, b1+b2, c1+c2, d1+d2, e1+e2, f1+f2)

    values = Set(s1,s2,s3,s4,s5,s6)
    if (values.size == 6) // all unique
    if (values.contains(9))
  } yield List(s1,s2,s3,s4,s5,s6).sorted

  val res = sums.toSet
  println(res.size)

  res.foreach(println)
}