import React from 'react';

import monastery from '../../assets/images/monastery.jpg';
import pliska from '../../assets/images/pliska.jpeg';
import shumenskaKrepost from '../../assets/images/shumenska-krepost.jpeg';
import zandana from '../../assets/images/zandana.jpg';
import madarskiKonnik from '../../assets/images/madarski-konnik-цопъ.jpg';
import osmarEye from '../../assets/images/osmar.jpg';
import preslav from '../../assets/images/preslav.jpg';
import skalenMonastery from '../../assets/images/skalenMonastery.jpg'

import './styles.scss';

const Landmarks = () => {
	return (
		<section className="gallery pt-5 pb-5">
			<article className="card rounded-2 mt-md-5 p-5 shadow m-auto gallery-card-wrapper w-75"
					 style={{background: '#EBEBEB'}}>
				<h2 className="text-center mb-5">ЗАБЕЛЕЖИТЕЛНОСТИ</h2>
				<ul>
					<li className="m-md-4">
						Бенедиктински манастир (Царев брод) – 23,7км /приблизително 27мин с автомобил/
					</li>
					<li className="m-md-4">
						Плиска – Първа Българска столица – 35,2км /приблизително 38мин с автомобил/
					</li>
					<li className="m-md-4">
						Шуменска крепост – 41,5км /приблизително 45мин с автомобил/
					</li>
					<li className="m-md-4">
						Пещера Зандана – 42км /приблизително 47 мин с автомобил/
					</li>
					<li className="m-md-4">
						Мадарски конник – 42,7км /приблизително 48 мин с автомобил/
					</li>
					<li className="m-md-4">
						Ханкрумовски скален манастир – 46,5км/приблизително 55мин с автомобил/
					</li>
					<li className="m-md-4">
						Окото на Осмар – 48,2 км/приблизително 50мин с автомобил/
					</li>
					<li className="m-md-4">
						Велики Преслав – Втора българска столица – 52,1км /приблизително 52мин с автомобил/
					</li>
				</ul>
				<article className="mt-5">
					<div>
						<span className="fs-4">Бенедиктински манастир (Царев брод) – </span>
						<span>23,7км /приблизително 27мин с автомобил /</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={monastery} alt="monastery"/>
					</div>

					<p className="mt-3">
						Католически манастир „Св. Бенедикт”се намира на 10 км. от град Шумен и е единствения действащ в
						Североизточна България. Манастирът е основан през 1914г. от четири сестри – бенедиктинки (една
						учителка, една земеделка, една медицинска сестра и една шивачка) от Германия и е известен с
						приготвянето на лечебен мехлем за кожни изгаряния. С това официално е поставено началото на
						манастира, който през 2014 г. чества своята 100-годишнина. Манастирът е действащ и в него живеят
						монахини от различни страни – България, Германия, Филипините и Южна Корея. Те развиват
						благотворителна дейност в селото и района.
					</p>
					<p>
						Историята му започва преди повече от век, но и до днес монахините в шуменското село Царев брод
						продължават да приемат всеки, който има нужда и да правят чудотворен мехлем, чиято рецепта пазят
						в тайна, но казват, че е помогнал на хиляди. Манастирът е известен с целебния мехлем,
						произвеждан от сестрите. Основната му съставка е невен. Билката монахините отглеждат сами в
						градината си. Повече от 100 години монахините от манастира на сестрите бенедиктинки в шуменското
						село Царев брод помага както за духовното, така и за физическото здраве на хората.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Плиска – Първа Българска столица – </span>
						<span>35,2км /приблизително 38мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={pliska} alt="pliska"/>
					</div>

					<p className="mt-3">
						Националният историко-археологически резерват „Плиска“ се намира на 28 километра североизточно
						от град Шумен и на 3 километра от съвременния град Плиска. Той е част от Стоте национални
						туристически обекта.
					</p>
					<p>
						Плиска е първата столица на България и люлката на днешната българска държава. От основаването на
						Българската държава през 681 г. от хан Аспарух до 893 г. Плиска е освен столица и един от
						най-големите и богати градове в Европа и света. Тя е забележителна с архитектурата си, която
						българите носят от своите предишни населения.
					</p>
					<p>
						Типично за народ, идващ от степите, българите строят столицата си насред полето, което е
						обградено с височини, които са естествена преграда пред врага. Построени са три отбранителни
						пояса. Първият е дълбок земен ров с висок насип, който огражда Външния град. Вторият е направен
						от огромни каменни блокове, образуващи висока около 12 м крепостна стена, която на всяка стена
						има по 2 петоъгълни кули и порта, а главният вход е на източната крепостна стена. Третият пояс е
						тухлено укрепление, защитаващо цитаделата. Целият ограден от стени комплекс е разположен върху
						площ от 0,5 кв. км. Градът е бил гигантски за средновековните мащаби – 23,3 кв. км. На 1,3км от
						източната порта на Вътрешния град се намира Голямата базилика – най-големият християнски храм в
						Югоизточна Европа от времето на покръстването на Българския народ.
					</p>
					<p>
						Разкритите останки са консервирани и са обособени като музей на открито, който може да бъде
						посетен и в неработно време. Находки от резервата са изложени в музейната експозиция и са
						свързани най-вече с бита, материалната и духовна култура на жителите на старата столица.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Шуменска крепост – </span>
						<span>41,5км /приблизително 45мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={shumenskaKrepost} alt="krepost"/>
					</div>

					<p className="mt-3">
						Шуменската крепост е връстник на Приамова Троя, като не й отстъпва нито по величие, нито по
						богато историческо минало. Разположена е на върха на Шуменското плато, на 2км от града. Първата
						стена на крепостта е издигната през 5в. пр.н.е. и слага началото на един от най-значимите
						търговски центрове през Второто българско царство. Развиват се много занаяти, секат се монети,
						осъществява се търговия с градове от цялата страна. Крепостта се радва и на видни царски
						посещения, за което свидетелстват намерени надписи. Стратегическото й място я прави и една от
						най-важните военни наблюдателници.
					</p>
					<p>
						Освен великолепните природни пейзажи, в Шуменската крепост може да видите голяма част от
						запазените й стени, възстановената й главна порта и една от охранителните кули. Крепостните
						стени са били външни и вътрешни, като помежду им е имало дълбок ров. Впечатление ще ви направят
						ярко белите камъни на фона на вековните сиви постройки. Това са възстановените части на
						крепостта.
					</p>
					<p>
						В района се намира и музей, в който ще се удивите от богатата му колекция – златни накити,
						монети, позлатени битови съдове, украшения от кост, копия, боздугани, керамични съдове,
						декоративни розетки, светилници. И това са само част от ценните предмети, открити сред славните
						руини.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Пещера Зандана – </span>
						<span>42км /приблизително 47 мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={zandana} alt="zandana"/>
					</div>

					<p className="mt-3">
						Пещера „Бисерна“ („Зандана“) е най-дългата и най-красива пещера на Шуменското плато.
					</p>
					<p>
						Пещера „Бисерна“ се намира в м. „Кьошкове“, на 1км западно от гр. Шумен и на 404м надморска
						височина. Тя е наклонена, възходяща, разклонена, двуетажна и водна, с постоянно изтичаща от нея
						вода. Входът й е на около 50м по-ниско от билото на платото и е със североизточно изложение.
						Развита е в два етажа (Горна и Долна галерия). Долният етаж е подземна река, чиито среден дебит
						е 8л/с. Галериите са разположени една над друга и са с постоянна вертикална връзка.
						Конфигурацията на пещера „Бисерна“ следва югозападно-североизточна посока на развитие.
						Последователността на галериите е следната: Източна галерия, Малка галерия, Главна галерия,
						Водна галерия, Голяма зала, Красива зала, Сифона и Суха галерия. Пещерата се обитава от 14 вида
						прилепи, които образуват многочислени колонии във вътрешността й. Понастоящем естественият
						(старият) вход на пещерата е затворен, с което се цели опазване чистотата на пещерната река,
						фауната и пещерните образувания.
					</p>
					<p>
						Съветваме ви да позвъните на посочения телефон 054/800 765, поради специфичното работно време,
						обвързано със сезона и популацията на приепите.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Мадарски конник –  </span>
						<span>42,7км /приблизително 48 мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={madarskiKonnik} alt="madara"/>
					</div>

					<p className="mt-3">
						Мадарският конник е скален барелеф, представляващ триумфиращ владетел- символ на мощта на
						Първата българска държава. Изсечен е на отвесна скала край Шуменското село Мадара.
					</p>
					<p>
						Барелефът изобразява конник в естествен ръст, следван от куче, пробол с копие лъв, повален пред
						предните крака на коня. Намира се на височина 23м от основата на скалата.
					</p>
					<p>
						Според една от теориите барелефът е на хан Тервел – вторият владетел на Българската държава след
						хан Аспарух. За това свидетелства надпис до конника, от който се разбира, че сваления Визатийски
						император Юстиан Втори е дошъл при Тервел да моли за помощ.
					</p>
					<p>
						Барелефът е част от голям археологически комплекс. Стръмни стъпала в ляво от конника водят до
						Мадарското плато на 431м височина, където се намират останки от средновековна крепост.
					</p>
					<p>
						Археологическият резерват е с лятно работно време от 8:00 – 19:00ч. и със зимно работно време от
						8:00 – 16:00ч. До площадката под барелефа се стига по близо 100-метрово стълбище. На
						туристическият обект се поставя печат, удостоверяващ посещението, съхраняван в хижа „Мадарски
						конник“.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Ханкрумовски скален манастир – </span>
						<span>46,5км/приблизително 55мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={skalenMonastery} alt="madara"/>
					</div>

					<p className="mt-3">
						В района на Шуменското плато има цял комплекс от средновековни скални мастири, които са били
						обитавани от монаси отшелници през Средновековието. Изградени са в меки варовикови скали, които
						са били лесни за обработка. Те обаче са поддавали и на рушене от природата. Поради тази причина
						към днешна дата, в скалните пещери почти липсват следи от стенописи. Ханкрумовият манастир е
						един от най- запазените. За неговото изграждане е използвана естествена пещера, която е
						обработена допълнително. Съставен е от три помещения, като едно от тях е църква с добре оформен
						олтар. До нея има още едно помещение, което се ползвало за спално от монасите.
					</p>
					<p>
						До храма се стига по тясна стълба, издълана в скалите. От „прозрците“ му се открива красива
						гледка към Калугеровия боаз.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Окото на Осмар – </span>
						<span>48,2 км/приблизително 50мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={osmarEye} alt="madara"/>
					</div>

					<p className="mt-3">
						Осмар е село в региона на Шуменското плато, което повечето хора свързват с прочутия осмарски
						пелин. Голямата атракция обаче са скалните манастири над селото.
					</p>
					<p>
						Подобно на Ханкрумовския скален манастир те също са изградени в меки варовикови скали. В тях са
						живели монаси отшелници.
					</p>
					<p>
						Най-големият и запазен е Костадиновият. Той е издълбан на височина от 8-10м от земята в отвесна
						скала. Достъпът до него е посредством метална стълба , поставена неотдавна. На стотина метра от
						него се намира още една скална църка – Диреклията. Наречена е така заради изградения до входа
						стълб – дирек от турски език. Според местните тя се е позлвала като затвор за провинилите се
						монаси.
					</p>
					<p>
						На върха на скалата на Костадиновия манастир се намира интересно скално образование, наречено
						Окото или Халката. Представлява голяма канара с процеп, приличащ на човешко око.
					</p>
				</article>

				<article className="mt-5">
					<div>
						<span className="fs-4">Велики Преслав – Втора българска столица – </span>
						<span> 52,1км /приблизително 52мин с автомобил/</span>
					</div>
					<div className="text-center mt-4">
						<img className="w-75 h-50 mt-3 mb-4 bg-white p-3" src={preslav} alt="preslav"/>
					</div>

					<p className="mt-3">
						Градът възниква през втората половина на IX век по време на управлението на княз Борис I (852 –
						889) като военен лагер с укрепен дворец и гарнизон, разположен на 30 км от столицата на Първата
						българска държава Плиска. През 893 г., след Преславския църковно-народен събор, градът е обявен
						за столица на България, като се превръща и в седалище на първата българска книжовна школа.
						Преславската книжовна школа се развива като важен литературен и културен център в България и в
						славянския свят, където са служили изявените средновековни писатели и учени Наум Охридски,
						Константин Преславски, Йоан Екзарх, Презвитер Козма, Черноризец Храбър, Тудор Доксов и други.
					</p>
					<p>
						Апогеят на културата в град Преслав е засвидетелстван в периода 893–972 г. Градът се превръща в
						един от най-красивите и величествени градове на Югоизточна Европа, от който са съхранени значими
						паметници на Плисковско-преславската култура. Външният град е бил обкръжен от белокаменни стени.
						Конструкциите на портите, кулите и стените са подобни на тези в Плиска. Вътрешният град също е
						бил обкръжен със стена, където се намира комплексът на царския чертог: величествени каменни
						дворци като Големия дворец и Тронната палата с колони, а също богато украсената с мозайки,
						мрамор и керамични икони Кръгла църква и други.
					</p>
				</article>
			</article>
		</section>
	);
};

export default Landmarks;