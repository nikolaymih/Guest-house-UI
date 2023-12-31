import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import './Rules.scss';

const Rules = () => {
	return (
		<section className="gallery pt-5 pb-5">
			<article className="card rounded-2 mt-md-5 p-5 shadow m-auto gallery-card-wrapper w-75">
				<h2 className="text-center mb-5">Политика на къщата</h2>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Къща за гости „Становец“ - Правила на къщата и Общи Условия</Accordion.Header>
						<Accordion.Body>
							<p>Скъпи гости, добре дошли в Къща за гости „Становец“!</p>
							<p>Бихме искали да Ви запознаем с основните правила на този дом.</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Резервации, Плащане, Анулиране</Accordion.Header>
						<Accordion.Body>
							<p>
								Резервация в Къща за гости „Становец“ можете да направите по един от следните
								начини:
							</p>
							<p>* чрез резервационната форма на сайта, което изисква потвърждение от
								наша страна</p>
							<p>* чрез имейл</p>
							<p>* по телефона</p>
							<p>* чрез платформите за резервации, с които работим</p>
							<p className="mb-1">В случай на директна резервация, резервацията Ви е гарантирана с
								депозит,
								равен на 50 % от общата сума за престоя Ви. Останалите 50 % се заплащат по
								банков път преди настаняването, или в брой при настаняване.</p>
							<p className="mb-1">Резервации направени в последния момент /до една седмица преди
								настаняването/ изискват пълно плащане на престоя.
								При положение, че гостите не са обявили анулиране на резервацията и не са
								се явили за настаняването, цялата предплатена от тях сума се усвоява като
								неустойка.
							</p>
							<p className="mb-1">
								В случай на анулирана резервация, не по-малко от 14 дни преди датата за
								настаняване, цялата предплатена сума се възстановява.
								В случай на анулирана резервация между 7 и 14 дни преди датата за
								настаняване, цялата предплатена сума ще служи като депозит за следващо
								посещение.
							</p>
							<p className="mb-3">
								В случай на анулирана резервация в срок по-малък от 7 дни преди датата за
								настаняване, 50% от предплатената сума се усвоява като неустойка и 50% ще
								служи като депозит за следващо посещение.
							</p>
							<p>Начини на плащане:</p>
							<p>* В брой</p>
							<p>* С банков превод по следната банкова сметка:</p>
							<p>Банка: "ПроКредит Банк (България)" АД</p>
							<p>BIC: PRCBBGSF</p>
							<p>IBAN: BG06PRCB92301052866901 за плащания в BGN</p>
							<p>Получател: Михайлов трейд ЕООД</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Настаняване и Освобождаване</Accordion.Header>
						<Accordion.Body>
							<p>Настаняване: след 15.00 часа.</p>
							<p>Освобождаване: до 12.00 часа</p>
							<p>По-ранното настаняване или по-късното освобождаване стават само при
								предварителна договорка, както и при възможност за това.
							</p>
							<p>
								Настаняването и освобождаването стават в присъствието на собственика или
								негов представител.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Поверителност на вашите лични данни</Accordion.Header>
						<Accordion.Body>
							<p>
								Следвайки националното законодателство, като собственици ние сме
								задължени да събираме Вашите лични данни при настаняване. Всички
								събирани лични данни са поверителни и при никакви обстоятелства няма да
								бъдат разпространявани и/или използвани от нас и/или предоставяни на трети
								страни, освен на държавни институции и то само ако имат правно основание за
								това.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>Депозит за щети</Accordion.Header>
						<Accordion.Body>
							<p>
								За да се гарантира нормалното отношение към къщата и двора се изисква
								предоставянето на депозит от 300 лв., платени при настаняването. Депозитът
								се възстановява при напускане на вилата, след оглед извършен от собственика
								и в присъствието на някой от гостите.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>Пушене</Accordion.Header>
						<Accordion.Body>
							<p>
								Във всички вътрешни помещения на Къща за гости „Становец“ не се разрешава пушенето.
								Това включва електронни цигари, наргилета, цигари и пури.
								Пушенето е възможно на всички балкони и общи външни части. Моля
								използвайте пепелниците и не изхвърляйте фасовете в градината.
								При нарушение на тази политика, от Вашият депозит ще бъде удържана сума
								от 50 лева.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="6">
						<Accordion.Header>Видеонаблюдение</Accordion.Header>
						<Accordion.Body>
							<p>
								Къща за гости „Становец“ е оборудвана със система за постоянно видеонаблюдение в общите части.
								От настаняването си в къщата до нейното освобождаване, всеки гост предоставя право да бъде сниман,
								видеозаписван, или заснеман, без заплащане или възнаграждение.
								Ползвайки услугите на къщата, Вие се съгласявате с видеонаблюдението и спазването на вътрешните правила за сигурност.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="7">
						<Accordion.Header>Шум</Accordion.Header>
						<Accordion.Body>
							<p>
								Силната музика и вдигането на шум извън къщата са забранени, особено от
								14.00 до 16.00 часа, както и след 22.00 часа. Вътре в къщата можете да се
								забавлявате както желаете, но в рамките на разумни граници!
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="8">
						<Accordion.Header>Домашни любимци</Accordion.Header>
						<Accordion.Body>
							<p>
								Домашни любимци се допускат само по изключение, след предварително
								договаряне и без допълнително заплащане.
							</p>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</article>
		</section>
	);
};

export default Rules;