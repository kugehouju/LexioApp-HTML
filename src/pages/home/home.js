// src/pages/Home.js
function HomePage() {
    return `
<div class="Quiz">
      <div class="QuizButton com">
        <a href="../src/pages/quiz/quiz1/quiz1.html">コミュニケーション関連</a>
        <p>例：ASAP,キャッチアップ,リマインド...</p>
      </div>
  
          <div class="QuizButton blur">
        <a href="#">ワークスタイル・業務プロセス関連</a>
        <p>例：シームレス,スコープ,タイムライン...</p>
      </div>

      <!--
      -->
          <div class="QuizButton blur">
        <a href="#">プロジェクト管理・進行関連</a>
        <p>例：アジェンダ,マイルストーン,デリバリー...</p>
      </div>
  
          <div class="QuizButton blur">
        <a href="#">技術・システム運用関連</a>
        <p>例：ハンズオン,デプロイ,モジュール...</p>
      </div>
  
          <div class="QuizButton blur">
        <a href="#">ビジネス戦略・マーケティング関連</a>
        <p>例：KPI,バジェット,セグメンテーション...</p>
      </div>
</div>
  `;
}

export default HomePage;
