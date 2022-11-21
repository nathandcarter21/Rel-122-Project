import Head from 'next/head'
import { useState } from 'react';
import GameOver from '../components/GameOver';
import styles from '../styles/Home.module.css'

let questions = [
  "But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.",
  "Now the Nephites were taught to defend themselves against their enemies, even to the shedding of blood if it were necessary; yea, and they were also taught never to give an offense, yea, and never to raise the sword except it were against an enemy, except it were to preserve their lives.",
  "For verily, verily I say unto you, he that hath the spirit of contention is not of me, but is of the devil, who is the father of contention, and he stirreth up the hearts of men to contend with anger, one with another.",
  "Now they did not sin ignorantly, for they knew the will of God concerning them, for it had been taught unto them; therefore they did wilfully rebel against God.",
  "But who may abide the day of his coming, and who shall stand when he appeareth? For he is like a refiner's fire, and like fuller's soap.",
  "O my brethren, if ye could be healed by merely casting about your eyes that ye might be healed, would ye not behold quickly, or would ye rather harden your hearts in unbelief, and be slothful, that ye would not cast about your eyes, that ye might perish?",
  "And then shall that which is written come to pass: Sing, O barren, thou that didst not bear; break forth into singing, and cry aloud, thou that didst not travail with child; for more are the children of the desolate than the children of the married wife, saith the Lord.",
  "And he saith: These scriptures, which ye had not with you, the Father commanded that I should give unto you; for it was wisdom in him that they should be given unto future generations.",
  "And many graves shall be opened, and shall yield up many of their dead; and many saints shall appear unto many.",
  "And after the house of Israel should be scattered they should be gathered together again; or, in fine, after the Gentiles had received the fulness of the Gospel, the natural branches of the olive tree, or the remnants of the house of Israel, should be grafted in, or come to the knowledge of the true Messiah, their Lord and their Redeemer."
];
let answers = [2, 1, 3, 0, 3, 2, 1, 0, 2, 1];
let answerChoices = [['Nephi', 'Moroni', 'Mormon', 'Alma II'], ['Mormon', 'Moroni', 'Alma II', 'Isaiah'], ['Alma I', "Nephi", 'Moroni', 'Jesus'], ['Mormon', 'Samuel', 'Moroni', 'Malachi'], ['Laman', 'Jesus', 'Moroni', 'Malachi'], ['Nephi', 'Jesus', 'Alma II', 'Lehi'], ['Jesus', 'Isaiah', 'Alma I', 'Lehi'], ['Jesus', 'Nephi', 'Malachi', 'Isaiah'], ['Helaman', 'Nephi', 'Samuel', 'Moroni'], ['Lehi', 'Nephi', 'Laman', 'Lemuel']]


export default function Home() {
  let [question, setQuestion] = useState(0);
  let [answer, setAnswer] = useState(0);
  let [score, setScore] = useState(0);
  let [gameOver, setGameOver] = useState(false);

  function CheckAnswer() {
    if (answer === answers[question] && !gameOver) {
      setScore(score + 1);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Rel 122 Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Who said it?
        </h1>
        <h2>Question {question + 1}</h2>


        <p className={styles.quote}>"{questions[question]}"</p>
        <div className={styles.answers}>
          <button className={styles.answer} onClick={() => {
            setAnswer(0);
          }}>A) {answerChoices[question][0]}</button>
          <button className={styles.answer} onClick={() => {
            setAnswer(1);
          }}>B) {answerChoices[question][1]}</button>
          <button className={styles.answer} onClick={() => {
            setAnswer(2);
          }}>C) {answerChoices[question][2]}</button>
          <button className={styles.answer} onClick={() => {
            setAnswer(3);
          }}>D) {answerChoices[question][3]}</button>
        </div>
        <div className={styles.submitDiv}>
          <button className={styles.submit} onClick={() => {
            if (question < 9) {
              CheckAnswer();
              setQuestion(question + 1);
            }
            else {
              CheckAnswer();
              setGameOver(true);
            }
          }}>Submit</button>
        </div>
        <div className="score">
          <h2 className={styles.score}>Score: {score}/10</h2>
          <GameOver score={score} gameOver={gameOver} />
        </div>
      </main >
    </div >
  )
}
