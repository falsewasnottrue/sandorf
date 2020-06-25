object NullenUndEinsen extends App {

  def isOnlyOnesAndZeros(s: String): Boolean = s.foldLeft(true) {
    case (acc, c) => acc && (c == '0' || c == '1')
  }

  /**
  val result = for {
    s1 <- 0 to 1
    s2 <- 0 to 1
    s3 <- 0 to 1
    s4 <- 0 to 1
    s5 <- 0 to 1
    s6 <- 0 to 1
    s7 <- 0 to 1
    s8 <- 0 to 1
    // s9 <- 0 to 1

    base5 = s"$s8$s7$s6$s5$s4$s3$s2$s1"
    // _ = println(base5)
    base10 = Integer.parseInt(base5, 5)
    base2 = Integer.toString(base10, 2)
    if (isOnlyOnesAndZeros(base2))

    base3 = Integer.toString(base10, 3)
    if (isOnlyOnesAndZeros(base3))

    base4 = Integer.toString(base10, 4)
    if (isOnlyOnesAndZeros(base4))
  } yield base10

  println(result.size)
  println(result)
  */

  val res = 82000
  println(Integer.toString(res,2))
  println(Integer.toString(res,3))
  println(Integer.toString(res,4))
  println(Integer.toString(res,5))
}
