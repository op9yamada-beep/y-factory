document.addEventListener("DOMContentLoaded", function() {
    // 差し込みたい場所の要素を取得し、共通のメニューHTMLを流し込む
    const menuContainer = document.getElementById("common-menu");
    if (menuContainer) {
        menuContainer.innerHTML = `
            <ul class="menu-list">
                <li class="menu-item"><a href="shopping_center_view.html" class="menu-link">商品閲覧・ホーム</a></li>
                <li class="menu-item"><a href="login.html" class="menu-link">ショップ・ログイン</a></li>
                <li class="menu-item"><a href="newaccount.html" class="menu-link">ショップ・アカウント登録</a></li>
                <li class="menu-item"><a href="shoping_login.html" class="menu-link">ユーザーログイン・新規登録</a></li>
                <li class="menu-item"><a href="shoping_pass_set.html" class="menu-link">ユーザー・パスワード設定</a></li>
                <li class="menu-item"><a href="products.html" class="menu-link">ショップ・商品一覧</a></li>
                <li class="menu-item"><a href="products_cart.html" class="menu-link">カート</a></li>
                <li class="menu-item"><a href="shoping_address_set.html" class="menu-link">お客様情報入力</a></li>
                <li class="menu-item"><a href="purchasing_decision.html" class="menu-link">ご購入の内容確認</a></li>
                <li class="menu-item"><a href="shoping_address_edit.html" class="menu-link">お届け先の指定・変更</a></li>
                <li class="menu-item"><a href="shoping_mail_change.html" class="menu-link">メールアドレス変更</a></li>
		<li class="menu-item"><a href="choice_credit.html" class="menu-link">支払方法選択</a></li>
                <li class="menu-item"><a href="order.html" class="menu-link">オーダー管理</a></li>
                <li class="menu-item"><a href="sale.html" class="menu-link">売り上げデータ</a></li>
                <li class="menu-item"><a href="manager.html" class="menu-link">ショップ管理</a></li>
                <li class="menu-item"><a href="new.html" class="menu-link">商品登録</a></li>
                <li class="menu-item"><a href="p_edit.html" class="menu-link">商品編集</a></li>
                <li class="menu-item"><a href="after_credit.html" class="menu-link">決済完了後</a></li>
            </ul>
        `;
    }
});