object Legal extends App {

  // val legal = "UC 7 098 195 133"
  // println(isLegal(legal))

  val cands = List(
    "WA088_667661",
    "UC10109531_9",
    "VA40154290_2",
    "UE5099_81298",
    "ZB36_6543192",
    "XA138190_039",
    "PA5960_97033",
    "EB172540_496"
  )

  cands.foreach(cand =>
    println(cand + " " + compl(cand))
  )

  private def compl(s: String): Int = {
    (0 to 9).toList.find(i => isLegal(s + i)).getOrElse(-1)
  }

  private def qs(s: String): Int = {
    // nur buchstaben und zahlen
    val cs: List[Char] = s.toCharArray.toList.filter(_.isLetterOrDigit)
    // println(cs)

    // buchstaben in ascii umwandeln
    val vs: List[Int] = cs.flatMap(toVs)
    // println(vs)

    // quersumme bilden
    val qs = vs.sum
    // println(qs)

    qs
  }

  private def isLegal(s: String): Boolean =  qs(s) % 9 == 0

  private def toVs(c: Char): List[Int] = {
    if (c >= '0' && c <= '9') {
     List(c.toInt - '0')
    } else {
      val a = c.toInt
      List(a / 10, a % 10)
    }
  }
}
