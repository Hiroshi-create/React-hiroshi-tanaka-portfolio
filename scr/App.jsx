import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <section className="name-area">
        <ul className="information-list">
          <li>
            <main className="name">
              {/* <h1> */}
              田中 丈士
              <span className="sabName">Hirohi Tanaka</span>
              {/* </h1> */}
            </main>
          </li>
          <li>
            <table className="information">
              <tr>
                <th>生年月日</th>
                <td>：２００１年４月４日</td>
              </tr>
              <tr>
                <th>mail</th>
                <td>：hiro130404@gmail.com</td>
              </tr>
            </table>
          </li>
        </ul>
      </section>
      <section className="profile-area">
        <ul className="profile-list">
          <li>
            <h1 className="title">－ Profile －－－－－－－－－</h1>
            <p className="profile">
              <br />
              　2020年４月、関西学院大学 理工学部 情報科学科 入学後、
              <br />
              授業で C, Java, Python の基礎を学習しながら軽音サークル
              <br />
              で趣味である音楽活動に力を入れる。
              <br />
              <br />
              　2022年の2月、以前から気になっていたホームページの
              <br />
              仕組みを知るためにドットインストールなどを用いて HTML, <br />
              CSS, JavaScript を学習する。
              <br />
              <br />
              　2022年の10月末、自分が想像する SNS の開発を夢見て、
              <br />
              アプリ開発・リリースまでの流れを学ぶために以前から気に
              <br />
              なっていた Unity, C#言語を用いてゲームの開発を始める。
              <br />
            </p>
          </li>
          <li>
            <div className="myFaceImg-pos">
              <img
                src="images/myFace.png"
                alt="田中丈士の顔写真です"
                className="myFaceImg"
              />
            </div>
            <div className="hobbies-skills-pos">
              <table className="hobbies-skills">
                <tr>
                  <th>趣味</th>
                  <td>：歌、バンド演奏</td>
                </tr>
              </table>
              <p className="hobbies-skills-detail">
                　物心がついた時から歌うことが好きで
                <br />
                軽音サークルに入り、Vo のみならず
                <br />
                Gt, Ba, Dr のパートを初め、計150曲ほど
                <br />
                曲のコピーをしてきました。
              </p>
              <table className="hobbies-skills">
                <tr>
                  <th>特技</th>
                  <td>：雑談中に小さな笑顔を生む</td>
                </tr>
              </table>
              <p className="hobbies-skills-detail">
                　数人で日常会話をしている時に一言
                <br />
                発して笑いを取るのが得意ですが、たまに
                <br />
                ハマらない人がいるようです。
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="skill-area">
        <h1 className="title">－ Skill －－－－－－－－－－－－－－－－－－</h1>
        <ul className="skill-list">
          <li>HTML ・・・・・・・・・・★★☆☆☆</li>
          <li>CSS ・・・・・・・・・・・★★☆☆☆</li>
          <li>JavaScript ・・・・・・・・★☆☆☆☆</li>
          <li>C#・・・・・・・・・・・・★★★☆☆</li>
          <li>Python・・・・・・・・・・★★☆☆☆</li>
          <li>Java ・・・・・・・・・・・★☆☆☆☆</li>
          <li>Unity・・・・・・・・・・・★★★☆☆</li>
          <li>Git/GitHub ・・・・・・・・★☆☆☆☆</li>
        </ul>
      </section>
      <section className="workIntroduction-area">
        <h1 className="title">－ Work introduction －－－－－－－－－－</h1>

        <h2 className="workTitle">Invisible Robots</h2>
        <p></p>

        <div>
          <img
            src="images/homeScreen.png"
            alt="Invisible Robots のホーム画面です。"
            className="myFaceImg"
          />
          <img
            src="images/preparationScreen.png"
            alt="Invisible Robots のバトル準備画面です。"
            className="myFaceImg"
          />
          <img
            src="images/battleStartScreen.png"
            alt="Invisible Robots のバトル開始画面です。"
            className="myFaceImg"
          />
          <img
            src="images/battleScreen.png"
            alt="Invisible Robots のバトル途中画面です。"
            className="myFaceImg"
          />
          <img
            src="images/endOfBattleScreen.png"
            alt="Invisible Robots のバトル終了画面です。"
            className="myFaceImg"
          />
        </div>

        <nav className="navigation">
          <ul>
            <h3>目次</h3>
            <li>制作年月日</li>
            <li>ターゲットユーザー</li>
            <li>作品のコンセプトやポイント</li>
            <li>使用ソフト、使用言語などの制作環境</li>
            <li>制作にあたり困難だった点と、それをどのように克服したのか</li>
          </ul>
        </nav>
        <div>
          <h4 className="workSabTitle">制作年月日</h4>
          <table>
            <tr>
              <th>制作開始日</th>
              <td>：2022年11月</td>
            </tr>
            <tr>
              <th>制作期間</th>
              <td>：３ヶ月</td>
            </tr>
          </table>
        </div>
        <div>
          <h4 className="workSabTitle">ターゲットユーザー</h4>
          <p>
            <td>
              電車や家など最小１０分程度の空き時間にiPhoneでゲームをするユーザーをターゲットに制作を行った。
            </td>
          </p>
        </div>
        <div>
          <h4 className="workSabTitle">作品のコンセプトやポイント</h4>
          <p>
            見え隠れする敵ロボットを探索しながらコアロボットを破壊する、現実世界では体験できない仕様のボードゲームである。
          </p>
        </div>
        <div>
          <h4 className="workSabTitle">使用ソフト、使用言語などの制作環境</h4>
          <table>
            <tr>
              <th>使用ソフト</th>
              <td>：Unity、Blender</td>
            </tr>
            <tr>
              <th>使用言語</th>
              <td>：C#</td>
            </tr>
          </table>
        </div>
        <div>
          <h4 className="workSabTitle">
            制作にあたり困難だった点と、それをどのように克服したのか
          </h4>
          <p></p>
        </div>
      </section>

      {/* <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};
