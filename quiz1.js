"use strict"

{
    const question = document.getElementById("question");
    const question_text1 = document.getElementById("question_text1");
    const question_text2 = document.getElementById("question_text2");
    const question_text3 = document.getElementById("question_text3");
    const question_text4 = document.getElementById("question_text4");
    const choices = document.getElementById("choices");
    const correct_comment = document.getElementById("correct_comment");
    const wrong_comment = document.getElementById("wrong_comment");
    const explanation1 = document.getElementById("explanation1");
    const explanation2 = document.getElementById("explanation2");
    const explanation3 = document.getElementById("explanation3");
    const explanation4 = document.getElementById("explanation4");
    const explanation5 = document.getElementById("explanation5");
    const link_p = document.getElementById("link_p");
    const link_a = document.getElementById("link_a");
    const q_number = document.getElementById("q_number");
    const next_btn = document.getElementById("next_btn");
    const result = document.getElementById("result");
    const scoreLabel = document.querySelector("#score");
    const rank = document.getElementById("rank");
    const saikun = document.getElementById("saikun");
    const commentary = document.getElementById("commentary");
    const target = document.getElementById("link_a");

    


    // ▼①元のHTMLソースを保持しておく変数
    var backupOriginal = "";
    // ▼②文字列を検索してハイライト用要素を加える処理
    function replacer( str, word , att  ) {
      var SearchString = '(' + word + ')';
      var RegularExp = new RegExp( SearchString, "g" );
      var ReplaceString = '<span class="' + att + '">$1</span>';
      var ResString = str.replace( RegularExp , ReplaceString );
      return ResString;
  }
    // ▼③ハイライトを加える処理
    function addhighlight() {
      backupOriginal = document.getElementById("question_text").innerHTML;
      var forShow = backupOriginal;
      forShow = replacer( forShow, "(1)Spectacular", "under" );
      document.getElementById("question_text").innerHTML = forShow;
  }

  // ▼④ハイライトを消す処理
function clearhighlight() {
    document.getElementById("question_text").innerHTML = backupOriginal;  // バックアップから書き戻す
    backupOriginal = "";    // バックアップを消す
}
// ▼⑤ハイライトを加えるか消すかを判断
function highlightcheck() {
    if( backupOriginal.length == 0 ) {
        // 何もバックアップされていなければ（未ハイライトなので）ハイライトを加える
        addhighlight();
    }
    else {
        // 何かバックアップされていれば（ハイライト済みなので）ハイライトを消す
        clearhighlight();
    }
}


    


    const quizSet = [
        
        {q: "(1) 傍線部の語句の意味として適切なものを選択してください。", c: ["華やかな", "疑わしい", "まぶしい"], e1: "正解……「華やかな」", e2:"「まぶしい」の意味の単語はblinding、dazzlingなど", e3:"「疑わしい」の意味の単語はsuspiciousなど",},
        {q: "(2) 空欄に当てはまる語を選択してください。", c: ["by", "at", "in"], e1: "正解……「by」", e2:"前置詞はイメージを捉えることがおすすめ！", e3:"inは中に入っているイメージ", e4:"atは点をコアに、派生して場所やある地点への移動", e5:"byは近接しているイメージ",},
        {q: "(3) 傍線部と同じ意味のものを選択してください。", c: ["must become", "are able to", "are about to"], e1: "正解……「must become」", e2: "be sure toは「〜に違いない」の意味。", e3:"よって、mustで言い換えられる。", e4:"②be able toは「〜できる」、③be about toは「〜しようとしている」", e5:"日本語訳）Opening FestivalとEnding Festivalには、「圧倒的な規模」「華やかな演出」「長い歴史」の主に3つの魅力があります。開幕、閉幕を飾る両企画は、例年数多くの方が観覧します。個性的で迫力があり、今年度も祭最大の盛り上がりを見せるに違いないパフォーマンスは必見です！",},
        {q: "(4) 空欄に当てはまる語を選択してください。", c: ["collaborative", "terrestrial", "borderless"], e1:"正解……「collaborative」", e2:"terrastrial =「地球の」", e3:"collaborative =「共同的な」", e4:"borderless =「無境界の」", e5:"「different groups」や「planned by～」といった文脈から判断し「collaborative」を選ぶ。",},
        {q: "(5) 空欄に当てはまる語を選択してください。", c: ["which", "that", "who"], e1: "正解……「which」", e2:"今回の先行詞（関係代名詞により修飾される名詞）は「the blue rose」、また用法は非制限用法。", e3:"whoは先行詞が人の場合に用いる。", e4:"②thatは非制限用法（コンマがある関係代名詞）の場合は使えない。", },
        {q: "(6) 空欄に当てはまる語を選択してください。", c: ["to", "up", "for"], e1: "正解……「to」", e2:"bring+目的語+for+名詞 「目的語（人）に名詞（もの）を持ってくる」", e3:"bring+目的語+to+名詞 「目的語（人･もの）を名詞（場所）につれてくる」", e4:"bring up 「～を育てる」、「～をしつける」", e5:"前置詞の後に続く名詞が「ParadiSe」（楽園）＝場所なので「to」を選ぶ",},
        {q: "(7) 空欄に当てはまる語を選択してください。", c: ["with", "for", "against"], e1: "正解……「with」", e2:"「〜との繋がり」という意味のtie（※通常tiesで用いる）は前置詞にwithを使う。",},
        {q: "(8) 空欄に当てはまる語を選択してください。", c: ["would", "will", "is"], e1: "正解……「would」", e2:"仮定法過去（現在の事実と異なる仮定）の主節は助動詞の過去形を用いる。",},
        {q: "(9) 空欄に当てはまる語を選択してください。", c: ["gratitude", "kindness", "wonderfull"], e1: "正解……「gratitude」", e2:"with a sense of gratitudeで「感謝の気持ちを胸に」の意",e3:"日本語訳）早稲田大学のコンセプトと同様に、早稲田祭2021も様々な地域社会との強いつながりを保っています。地域の方のご理解やご協力なしには決して祭は成り立ちません。早稲田祭2021の運営スタッフは地域の方への感謝の気持ちを胸に抱きながら日々活動しています。"},
        {q: "(10) 空欄に当てはまる語を選択してください。", c: ["between", "among", "from"], e1: "正解……「between」", e2:"対象が明確に区別されているものの時は3つ以上でもbetweenを用いる場合がある。",},
        {q: "(11) 空欄に当てはまる語を選択してください。", c: ["equipment", "material", "useful"],　e1:"正解……「equipment」", e2: "facilities（設備）の言い換えになっているequipment（設備）を選ぶ",},
        {q: "(12) 空欄に当てはまる語を選択してください。", c: ["make", "give", "change"], e1:"正解……「make」", e2: "make O Cで「OをCにする」というmakeの用法。", e3:"日本語訳）小野記念講堂ステージ、10号館109教室ステージ、戸山カフェテリアステージを比較してみましょう。3つのステージの違いは、広さと収容人数と設備です。ステージが一番広いのは小野記念講堂ステージ、収容人数が最も多いのは10号館109教室ステージ、そして設備が最も充実しているのは戸山カフェテリアステージです。ステージごとに異なった良さがあり、どこも演者を輝かせることが出来ます。",},
    ]
    let currentNum = 0;
    let isAnswered;
    let score = 0 ;


    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
      }

    function checkAnswer(li){
        if(isAnswered === true) {
            return;
        }
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add("correct");
            score++;
            

        } else {
            li.classList.add("wrong");
        }

        explanation1.classList.remove("none");
        explanation2.classList.remove("none");
        explanation3.classList.remove("none");
        explanation4.classList.remove("none");
        explanation5.classList.remove("none");
        link_p.classList.remove("none");
        link_a.classList.remove("none");
        next_btn.classList.remove("disabled");

    }

    function setQuiz(){
        isAnswered = false;

        question.textContent = quizSet[currentNum].q;

        explanation1.textContent = quizSet[currentNum].e1;

        explanation2.textContent = quizSet[currentNum].e2;

        explanation3.textContent = quizSet[currentNum].e3;

        explanation4.textContent = quizSet[currentNum].e4;

        explanation5.textContent = quizSet[currentNum].e5;

        link_p.textContent = quizSet[currentNum].lp;

        link_a.textContent = quizSet[currentNum].la;

        target.href = quizSet[currentNum].la;



        while(choices.firstChild){
            choices.removeChild(choices.firstChild);

        }

        


        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice =>{
          const li = document.createElement("li");
          li.textContent = choice;
          li.addEventListener("click", () => {
              checkAnswer(li);
          });
          choices.appendChild(li);

    });

    if (currentNum === quizSet.length - 1) {
        next_btn.textContent =" 結果を見る";
    }

    if (currentNum < 3 ) {
        q_number.textContent = "1⃣開幕企画・閉幕企画";
        question_text1.classList.remove("none");

    }　else if (currentNum < 6 ) {
        q_number.textContent = "2️⃣WASEDA NiGht ParadiSe";
        question_text2.classList.remove("none");
        question_text1.classList.add("none");

    } else if (currentNum < 9) {
        q_number.textContent = "3️⃣早稲田祭2021と早稲田のまちの繋がり";
        question_text3.classList.remove("none");
        question_text2.classList.add("none");

    } else if (currentNum < 12) {
        q_number.textContent = "4️⃣キャンパス内ステージ"
        question_text4.classList.remove("none");
        question_text3.classList.add("none")

    }


    }

    

    setQuiz();

    next_btn.addEventListener("click", () =>{
        if (next_btn.classList.contains("disabled")){
            return;
        }
        next_btn.classList.add("disabled")

        if (explanation1.classList.contains("none")){
            return;
        }
        explanation1.classList.add("none")

        if (explanation2.classList.contains("none")){
            return;
        }
        explanation2.classList.add("none")

        if (explanation3.classList.contains("none")){
            return;
        }
        explanation3.classList.add("none")

        if (explanation4.classList.contains("none")){
            return;
        }
        explanation4.classList.add("none")

        if (explanation5.classList.contains("none")){
            return;
        }
        explanation5.classList.add("none")

        if (link_p.classList.contains("none")){
            return;
        }
        link_p.classList.add("none")

        if (link_a.classList.contains("none")){
            return;
        }
        link_a.classList.add("none")

        


        
        if (currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `${score}`;
            result.classList.remove("hidden");
            if( score > 11){
                saikun.src = "design/image/saikun_rank1.png"
                commentary.textContent = "すごい！ばっちりツノ！"

            } else if ( score > 7) {
                saikun.src = "design/image/saikun_rank2.png"
                commentary.textContent = "あっぱれツノ～"

            }　else if( score > 3){
                saikun.src = "design/image/saikun_rank3.png"
                commentary.textContent = "まだまだいけるツノよ～！"

            } else {
                saikun.src = "design/image/saikun_rank4.png"
                commentary.textContent ="ここからが勝負！ファイト！ツノ！"

            }
        } else {
            currentNum++;
            setQuiz();
        }
    })
}
