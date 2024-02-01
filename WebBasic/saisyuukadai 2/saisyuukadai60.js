
var wordlist = ["aunnnokokyuu","aohaaiyoriideteaiyoriaosi","akinasuhayomenikuwasuna","akinohihaturubeotosi","asimotowomiru","asiwosukuwareru","abuhatitorazu","amefuttejikatamaru","isibasiwotataitewataru","isinouenimosannnenn","isogabamaware","issimukuiru","inunotooboe","inumoarukebabouniataru","uogokoroarebamizugokoro","usinihikaretezennkoujimairi","usokaradetamakoto","usohappyaku","usomohoubenn","umonomimininennbutu","umisennyamasenn","urinoturuninasubihanaranu","uwasawosurebakagegasasu","ebidetaiwoturu","oninikanabou","onnnagokorotoakinosora","kazegafukebaokeyagamoukaru","katyuunokuriwohirou","kahouhanetemate","karekimoyamanonigiwai","kawaiikonihatabiwosaseyo","kyuusonekowokamu","kiwomitemoriwomizu","kutihattyoutehattyou","kutihawazawainokado","keizokuhatikaranari","kennennnonaka","koukaisakinitatazu","gouniittehagounisitagae","kouboumofudenoayamari","sannsyouhakotubudemopiriritokarai","sannninnyorebamonnjyunotie","siranugahotoke","sukikosomononojyouzunare","sugitaruhanaooyobazarugagotosi","suzumenonamida","seitennohekireki","settinndemannjyuu","sonaearebaureinasi","tazannnoisi","tatutoriatowonigosazu","taruwosirumonohatomu","tumiwonikunndehitowonikumazu","turunohitokoe","tetuhaatuiutiniute","dennkanohoutou","nasakehahitonotamenarazu","nieyuwonomasareru","nikaikaramegusuri","nitowooumonohaittowomoezu","ninngennitarutokoroseizannari","ninngennbannjisaiougauma","nukanikugi","nusuttotakedakesii","nekonikatuobusi","nekonikobann","nekonohitai","nemiminimizu","norennniudeosi","hitonofurimitewagafurinaose","hiniaburawososogu","hinonaitokoronikemurihatatanu","hyakubunnhaikkennnisikazu","fuufugennkahainumokuwanu","fukoutyuunosaiwai","fuyukitarinabaharutookaraji","hesodetyawowakasu","hetanoyokozuki","hotokenokaomosanndo","magonimoisyou","miiratorigamiiraninaru","mimigaitai","mukasitottakineduka","meibanikuseari","mekaraurokogaotiru","menihamewo","motihamotiya","momokurisannnennkakihatinenn","yakeisinimizu","yanaginiyukiorenasi","yamaaritaniari","yamaihakikara","yamayoriookinainosisihadenu","rainennnokotowoiebaonigawarau","ryouyakuhakutininigasi","ruihatommowoyobu","rouheihasinazukiesarunomi","wagamiwotunettehitonoitasawosire","wazawaiwotennjitefukutonasu","waraukadonihafukukitaru"];
            var wordlistJapanese = ["阿吽の呼吸","青は藍より出でて藍より青し","秋茄子は嫁に食わすな","秋の日は釣瓶落とし","足元を見る","足をすくわれる","虻蜂取らず","雨降って地固まる","石橋を叩いて渡る","石の上にも三年","急がば回れ","一矢報いる","犬の遠吠え","犬も歩けば棒に当たる","魚心あれば水心","牛にひかれて善光寺参り","嘘から出た実","嘘八百","嘘もほうべん","馬の耳に念仏","海千山千","瓜の蔓に茄子はならぬ","噂をすれば影が差す","海老で鯛を釣る","鬼に金棒","女心と秋の空","風が吹けば桶屋が儲かる","火中の栗を拾う","果報は寝て待て","枯れ木も山の賑わい","可愛い子には旅をさせよ","窮鼠猫を噛む","木を見て森を見ず","口八丁手八丁","口は災いの門","継続は力なり","犬猿の仲","後悔先に立たず","郷に入って郷に従え","弘法も筆の誤り","山椒は小粒でもぴりりと辛い","三人寄れば文殊の知恵","知らぬが仏","好きこそものの上手なれ","過ぎたるは猶及ばざるが如し","雀の涙","青天の霹靂","雪隠で饅頭","備えあれば憂いなし","他山の石","立つ鳥跡を濁さず","足るを知るものは富む","罪を憎んで人を憎まず","鶴の一声","鉄は熱いうちに打て","伝家の宝刀","情けは人の為ならず","煮え湯を飲まされる","二階から目薬","二兎を追う者は一兎をも得ず","人間いたるところ青山あり","人間万事塞翁が馬","糠に釘","盗人猛々しい","猫に鰹節","猫に小判","猫の額","寝耳に水","暖簾に腕押し","人の振り見て我が振り直せ","火に油を注ぐ","火のない所に煙は立たぬ","百聞は一見に如かず","夫婦喧嘩は犬も食わぬ","不幸中の幸い","冬来たりなば春遠からじ","ヘソで茶を沸かす","下手の横好き","仏の顔も三度","馬子にも衣装","ミイラ取りがミイラになる","耳が痛い","昔取った杵柄","名馬に癖あり","目から鱗が落ちる","目には目を","餅は餅屋","桃栗三年柿八年","焼け石に水","柳に雪折れなし","山あり谷あり","病は気から","山より大きな猪は出ぬ","来年の事を言えば鬼が笑う","良薬は口に苦し","類は友を呼ぶ","老兵は死なず消え去るのみ","我が身をつねって人の痛さをしれ","禍を転じて福と為す","笑う門には福来る"];
            
            var time_limit = 60;
            var readytime = 3;
            var score;
            var correct;
            var mistake;
            var char_num = 0;
            var word_char;
            var random;
            function ready1(){
                readytime = 3;
                scoredis.innerHTML="";
                start_button.style.visibility ="hidden";
                var readytimer = setInterval(function(){
                count.innerHTML=readytime;
                readytime--;
                if(readytime < 0){
                    clearInterval(readytimer);
                    gameStart();
                }
                },1000);
            }
            function gameStart(){
                score = 0.0;
                mistake = 0;
                correct = 0;
                wordDisplay();
                var time_remaining = time_limit;
                var gametimer = setInterval
                (function(){count.innerHTML="残り時間:"+time_remaining;
                    time_remaining--;
                if(time_remaining <= 0){
                    clearInterval(gametimer);
                    finish();
                }
                },1000);
            }
            function wordDisplay(){
                random = Math.floor( Math.random() * wordlist.length );
                word.innerHTML=wordlist[random];
                japanese.innerHTML=wordlistJapanese[random];
                charInsort();
            }
            function charInsort(){
                word_char = wordlist[random].charAt(char_num);
            }
            function finish(){
                score = Math.floor(Math.pow(correct,2) * Math.pow((correct/(correct+mistake)),5));
                scoredis.innerHTML="スコア:"+score+"点"+"<hr>正解したタイプ数:"+correct+"<br>間違えたタイプ数:"+mistake+"<br>正答率"+(correct/(correct+mistake)*100).toFixed(1)+"%";
                count.innerHTML="";
                word.innerHTML="";
                japanese.innerHTML="";
                start_button.style.visibility ="visible";
                word_char=0;
                random = 0;
                char_num = 0;
            }
            document.onkeydown = function(e) {
                if(e.keyCode == 189){
                   keyStr = "-";
               }else if(e.keyCode == 188){
                   keyStr = ","
               }else{
               var keyStr = String.fromCharCode(e.keyCode);
               keyStr = keyStr.toLowerCase();
               }   
               if(keyStr == word_char){
               word.innerHTML="<span style='color: red;'>"+wordlist[random].substr(0,char_num+1)+"</span>"+wordlist[random].substr(char_num+1,wordlist[random].length);
               char_num++;
               correct++;
               charInsort();
               }else{
                   mistake++;
               }
               if(char_num == wordlist[random].length){
                   char_num=0;
                   wordDisplay();
               }
           };

    