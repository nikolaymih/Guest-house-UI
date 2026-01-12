import React from 'react';
import {Table} from "react-bootstrap";

const BGN_TO_EUR = 1.9558;

const formatPrice = (bgnPrice: number): string => {
	const eurPrice = Math.round(bgnPrice / BGN_TO_EUR);
	return `${eurPrice}€ / ${bgnPrice}лв.`;
};

const PricesTable = () => {
	return (
		<section>
			<Table striped bordered hover className="text-center">
				<thead>
				<tr className="align-middle">
					<th>Капацитет</th>
					<th>1 Нощувка</th>
					<th>2 Нощувки</th>
					<th className="w-25">3 и повече нощувки. Цена за една нощувка.</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>-</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>Спа</th>
								<th>Без</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>Спа</th>
								<th>Без</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>Спа</th>
								<th>Без</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">12 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(650)}</th>
								<th>{formatPrice(590)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(1100)}</th>
								<th>{formatPrice(1000)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(530)}</th>
								<th>{formatPrice(480)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">11 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(650)}</th>
								<th>{formatPrice(590)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(1100)}</th>
								<th>{formatPrice(1000)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(530)}</th>
								<th>{formatPrice(480)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">10 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(650)}</th>
								<th>{formatPrice(590)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(1100)}</th>
								<th>{formatPrice(1000)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(530)}</th>
								<th>{formatPrice(480)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">9 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(650)}</th>
								<th>{formatPrice(590)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(1100)}</th>
								<th>{formatPrice(1000)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(530)}</th>
								<th>{formatPrice(480)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">8 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(585)}</th>
								<th>{formatPrice(531)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(990)}</th>
								<th>{formatPrice(900)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(477)}</th>
								<th>{formatPrice(432)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">7 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(553)}</th>
								<th>{formatPrice(502)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(935)}</th>
								<th>{formatPrice(850)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(451)}</th>
								<th>{formatPrice(408)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">6 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(553)}</th>
								<th>{formatPrice(502)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(935)}</th>
								<th>{formatPrice(850)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(451)}</th>
								<th>{formatPrice(408)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">5 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(520)}</th>
								<th>{formatPrice(472)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(880)}</th>
								<th>{formatPrice(800)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(424)}</th>
								<th>{formatPrice(384)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">4 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(488)}</th>
								<th>{formatPrice(443)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(825)}</th>
								<th>{formatPrice(750)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(398)}</th>
								<th>{formatPrice(360)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">3 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(488)}</th>
								<th>{formatPrice(443)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(825)}</th>
								<th>{formatPrice(750)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(398)}</th>
								<th>{formatPrice(360)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">2 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(422)}</th>
								<th>{formatPrice(383)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(715)}</th>
								<th>{formatPrice(650)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(344)}</th>
								<th>{formatPrice(312)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th className="text-center">1 гости</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(422)}</th>
								<th>{formatPrice(383)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr>
								<th>{formatPrice(715)}</th>
								<th>{formatPrice(650)}</th>
							</tr>
							</thead>
						</table>
					</td>
					<td>
						<table className="table mb-0">
							<thead>
							<tr className="text-center">
								<th>{formatPrice(344)}</th>
								<th>{formatPrice(312)}</th>
							</tr>
							</thead>
						</table>
					</td>
				</tr>
				</tbody>
			</Table>
		</section>
	);
};

export default PricesTable;
