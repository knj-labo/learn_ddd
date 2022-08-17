# REVIEW
from:mirai
> 例えば、domainディレクトリ内に、クラスファイルとテストファイルが混在しているのは分けた方が親切かも？

大規模になるとその方が親切。
小規模の場合だと、ディレクトリを横断して閲覧するのは辛いなと個人的には思ってます。

> - `domain/member/member-enrollment-status.ts` ｜value-objectが、データベースに登録されている参加者ステータスの値に依存している（＝ `domain/task/task-progress-status.ts` も同様）
    
    ⇨ 自分も同じことやってました。松原さんはインフラ層に実装するみたいです。「DBの値を書き換えてドメイン層に影響が及ぶ」はNGという考え方

> domain/member/member.service.ts | インフラ層（QS,Rpository）に依存しているので、ドメイン層にインターフェイスを作ってそれに依存した方が良い

依存したらダメだからね、そうだね。

> domain/task/query-service.interface.ts | インターフェイスと思いきや内部実装が書かれていたので、utilにあるインターフェイスがこの層にあって、実装はインフラ層に置くべき

たしかに。
こちらの[Repository Pattern](https://github.com/prisma/prisma/discussions/3929#discussioncomment-3219327) を参考にしてましたね。
代入する箇所を間違えてますね。

> domain/member/member.aggregate.ts | 「集約を実装する」という概念はあまり馴染みがないかも・・・？これはドメインサービスと思って良いのでしょうか？

集約、ドメインオブジェクトを実装したと思ってください
まず、DDDでの実装する際に参考にしたのが、[DDD記事一覧](https://khalilstemmler.com/articles/tags/ddd/)で、コードに関しても基本的に模倣してます。

> - valueオブジェクト全般について、自分は使用上目に見えたロジックがなければ普通にエンティティ内のいちプロパティとしてstring指定とかやってました（＝過度にVO化することについては、意見が分かれそうなところな気もする）
    - 空文字禁止のバリデーションはエンティティの中でやってました

ボクのは過剰に最小単位で持たせすぎてますね、

> - ユースケースがユースケースのインターフェイスをimplementsしているのはいらないかも？
    - おそらくやりたいのは、ユースケース内のリポジトリやQSが、InterfaceRepository, InterfaceQS型であることだと思う
    - なので、 `usecase/member/find-all.usecase.ts` の findList()メソッドなどはインフラ層の実装につくる
    - そして execute()メソッドで、それを呼び出すみたいなイメージ

最初に実装する際にこちらの [参考記事](https://khalilstemmler.com/articles/typescript-domain-driven-design/updating-aggregates-in-domain-driven-design/#Creating-the-domain-model)を模倣していますね。
ただ callback みたいに呼び出せばいいだけだよね。

> 抽象クラスがutils配下にあるけど、エンティティが依存するならdomain配下でも良いのだろうか？（＝自分は抽象クラス作らなかったので、聞いてみたい）

いいと思いますよ。とりあえず、手を動かすために仮で置いておくディレクトリを作成して、インターフェースのファイルを置いていただけなので！（完璧を求めて。ディレクトリ構成は考えてないかな）

> ファクトリーメソッドを使わなかったので、メリットを聞いてみたい

メリットについてではないけど、使った理由として
`static factory method` と`private constructor`を使用することで、有効な名前を作成するために満たさなければならない事前条件を保証できるからかな。
検証ロジックは、不変条件ぽいですし。


> テストの結果として出力される文言がすべて定数化されて、ファイル上部で一言管理されており良いなと思った

OK

> domain/member/member-name.ts | isEmpty()メソッド、空っぽの時trueになると見せかけて、空っぽのときfalseになっている！？笑

あー、これはケアレスミスだー

> エンティティ＝ライフサイクルを持つオブジェクトなので、IDだけを持つIDエンティティというのが、いまいち理解できていない

こちらの [参考のコード](https://github.com/stemmlerjs/white-label/blob/master/src/core/domain/Entity.ts)を閲覧して、実装したけど
使わなかったので、等価を削除しただけかな。

from:takahiro
> MemberAggregateやTaskAggregateは、継承はされているものの、単なるEntityであると理解しました。
OK
> すでに作成されているエンティティ（member、task）の属性からプリミティブ型が排除されていて、素晴らしいと思いました！
:+1:
> utils配下にaggregate-root.ts、entity.ts、value-objectなどが配置されていますが、責務的に domainフォルダ下に__shared__などのフォルダを作成し、同配下に配置するほうがより適切な気がしました！（utilsにいろいろな要素が集まりすぎている。。）

utilsという名のゴミ箱みたいにはなっている。（意図としては,utilsで仮置きして、肥大化し始めたら各フォルダにいれようとしていた）

> ドメイン層にinterface（domain/member/query-service.interface.ts）が配置されていますが、これはユースケース層に配置するべきでは？domain層の配置されるのは、リポジトリではないでしょうか？

たしかに、そうだね。

> usecase層を集約単位でフォルダを分けられていますが、仮に集約跨ぎのユースケースが発生した場合、どのような配置になりそうですか？

あー、考えてなかった。でもリクエストごとのユースケースをつくるかなー

> member.controller.tsでconstructor()時に各種ユースケースを生成していますが、各メソッド内で生成させたほうが適切ではないでしょうか？

理解できてないので、ここ保留。

> member.service.tsのserviceという名称は意味が広く、なんでも入れることができる呼称のため、実装が膨らみがちです。決して誤りではありませんが、member-update-email-serviceなど個別に切り分けたほうが良いかもしれません！

たしかに、そう。

> prismaのseedデータ投入が、スッキリ実装されていて素晴らしいと思いました！

これは公式ドキュンメントを参考にした気がする。
