object Count extends App {

  val text = """As I have gone alone in there
               |And with my treasures bold,
               |I can keep my secret where,
               |And hint of riches new and old.
               |Begin it where warm waters halt
               |And take it in the canyon down,
               |Not far, but too far to walk.
               |Put in below the home of Brown.
               |From there it's no place for the meek,
               |The end is ever drawing nigh;
               |There'll be no paddle up your creek,
               |Just heavy loads and water high.
               |If you've been wise and found the blaze,
               |Look quickly down, your quest to cease,
               |But tarry scant with marvel gaze,
               |Just take the chest and go in peace.
               |So why is it that I must go
               |And leave my trove for all to seek?
               |The answers I already know,
               |I've done it tired, and now I'm weak.
               |So hear me all and listen good,
               |Your effort will be worth the cold.
               |If you are brave and in the wood
               |I give you title to the gold.""".stripMargin

  val letters = text.filter(_.isLetter).toLowerCase

  val lettersCount = letters.size
  val aCount = letters.filter(_ == 'a').size
  val qCount = letters.filter(_ == 'q').size

  println(lettersCount)
  println(aCount)
  println(qCount)
}
