object Galois extends App {

  val primes = 2 #:: Stream.from(3,2).filter(isPrime)

  def isPrime(n: Int): Boolean =
    primes.takeWhile(p => p*p <= n).forall(n % _ != 0)

  private def prime(n: Int): Int = primes(n)

  private def a(n: Int) = prime(prime(n)-2)

  private def X(n: Int, prev: Int): Int = {
    val an = a(n-2)
    val sign = Math.pow(-1, n-1).toInt

    prev + sign * an
  }

  val limit = 42
  val res = (2 to limit).foldLeft(List(1)) {
    case (curr :: rest, n) => X(n, curr) :: curr :: rest
  }.reverse

  val i = res.zipWithIndex.map {
    case (v,index) =>  s"${index+1}: $v"
  }
  println(i)
}
