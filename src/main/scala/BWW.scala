import scala.io.Source

object BWW extends App {
  private val vs: Map[Char, Int] = Map(
    'a' -> 1, 'ä' -> 6, 'b' -> 2, 'c' -> 3, 'd' -> 4, 'e' -> 5,
    'f' -> 6, 'g' -> 7, 'h' -> 8, 'i' -> 9, 'j' -> 10,
    'k' -> 11, 'l' -> 12, 'm' -> 13, 'n' -> 14, 'o' -> 15, 'ö' -> 20,
    'p' -> 16, 'q' -> 17, 'r' -> 18, 's' -> 19, 'ß' -> 38, 't' -> 20,
    'u' -> 21, 'ü' -> 26, 'v' -> 22, 'w' -> 23, 'x' -> 24, 'y' -> 25, 'z' -> 26
  )
  def of(s: String): Int = s.map(vs).sum

  val src = Source.fromResource("woerter.txt").getLines()

  val res = for {
    line <- src
    text = line.toLowerCase.filter(_.isLetter)

    a = BWW.of(text)
    b = text.size

    n = b*a*85+3*a+8*b
    if (n > 26000 && n<29000)
    e = b*a*64+7*a+11*b
    if (e > 21000 && e < 23000)

    _ = println(text + " :: " + n + " :: " + e)
  } yield (text, n, e)

  println(res.size)
  /*
  val result = for {
    x1 <- 'a' to 'z'
    x2 <- 'a' to 'z'
    if x2 != x1
    x3 <- 'a' to 'z'
    if x3 != x2
    x4 <- 'a' to 'z'
    if x4 != x3
    // x5 <- 'a' to 'z'
    // if x5 != x4
    // x6 <- 'a' to 'z'
    // x7 <- 'a' to 'z'

    text = "" + x1 + x2 + x3 + x4 // + x5 // + x6 //  + x7

    a = BWW.of(text)
    b = text.size

    n = b*a*85+3*a+8*b
    //if (n != 27860)
    if (n > 26000 && n<29000)
    e = b*a*64+7*a+11*b
    if (e > 21000 && e < 23000)

     _ = println(text) //  + ":: " + n + " :: " + e)
  } yield (text, n, e)
  */

  //println(result.size)
  // result.filter(_._2 == 28844).foreach(println)
  //println("N")
  // val res = result.map(s => (s._2, s._3)).toSet

/*  res.foreach(println)
  res.foreach {
    case (n,e) => println(s"49 ${n/1000}.${n % 1000} 8 ${e/1000}.${e % 1000}")
  }
  // result.map(_._3).toSet.foreach(println)
*/

}