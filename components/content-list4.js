import React from 'react'

import PropTypes from 'prop-types'

const ContentList4 = (props) => {
  return (
    <>
      <div className="content-list4-container thq-section-padding">
        <div className="content-list4-max-width thq-flex-column thq-section-max-width">
          <div className="content-list4-content14 thq-flex-column">
            <ul className="content-list4-ul1 thq-flex-column">
              <li className="content-list4-li10 thq-flex-column list-item">
                <h2 className="content-list4-heading7 thq-heading-2">
                  {props.heading7}
                </h2>
                <p className="content-list4-content7 thq-body-small">
                  {props.content7}
                </p>
                <ul className="content-list4-ul2 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading8}</h3>
                    <p className="thq-body-small">{props.content2}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading9}</h3>
                    <p className="thq-body-small">{props.content9}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="content-list4-content15 thq-flex-column">
            <ul className="content-list4-ul3 thq-flex-column">
              <li className="content-list4-li13 thq-flex-column list-item">
                <h2 className="content-list4-heading1 thq-heading-2">
                  {props.heading1}
                </h2>
                <p className="content-list4-content1 thq-body-small">
                  {props.content1}
                </p>
                <ul className="content-list4-ul4 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading2}</h3>
                    <p className="thq-body-small">{props.content2}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading3}</h3>
                    <p className="thq-body-small">{props.content3}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading4}</h3>
                    <p className="thq-body-small">{props.content4}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading5}</h3>
                    <p className="thq-body-small">{props.content5}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading6}</h3>
                    <p className="thq-body-small">{props.content6}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="content-list4-content16 thq-flex-column">
            <ul className="content-list4-ul5 thq-flex-column">
              <li className="content-list4-li19 thq-flex-column list-item">
                <h2 className="content-list4-heading10 thq-heading-2">
                  {props.heading10}
                </h2>
                <p className="content-list4-content10 thq-body-small">
                  {props.content10}
                </p>
                <ul className="content-list4-ul6 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading11}</h3>
                    <p className="thq-body-small">{props.content11}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading12}</h3>
                    <p className="thq-body-small">{props.content12}</p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">{props.heading13}</h3>
                    <p className="thq-body-small">{props.content13}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list4-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list4-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list4-content14 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul1 {
            align-items: flex-start;
          }
          .content-list4-li10 {
            align-items: flex-start;
          }
          .content-list4-heading7 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content7 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .content-list4-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list4-content15 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul3 {
            align-items: flex-start;
          }
          .content-list4-li13 {
            align-items: flex-start;
          }
          .content-list4-heading1 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content1 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .content-list4-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list4-content16 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul5 {
            align-items: flex-start;
          }
          .content-list4-li19 {
            align-items: flex-start;
          }
          .content-list4-heading10 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content10 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .content-list4-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 767px) {
            .content-list4-ul2 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .content-list4-ul4 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .content-list4-ul6 {
              padding-left: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list4-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .content-list4-ul4 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .content-list4-ul6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList4.defaultProps = {
  content4:
    'Voor het maken van een afspraak of meer informatie, kunt u ons bereiken via telefoon, e-mail of het contactformulier op de website.',
  content7:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  heading11: 'General',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading7: 'Terms of service',
  heading12: 'Damages and issues',
  content9:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  heading8: 'General Terms and Conditions',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  content1:
    'Ontdek hoe wij een individuele aanpak bieden voor elke patiënt, met aandacht voor hun specifieke behoeften en doelen.',
  heading6: 'Cookies',
  heading5: 'Campaign tracking',
  heading1: 'Welkom bij onze praktijk voor kinesitherapie en revalidatie',
  heading10: 'Refund Policy',
  content5:
    'Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis tempora et ullam quis qui fugiat necessitatibus qui quia dolorem 33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio 33 magni ratione ut odit rerum est nihil error et minus dolor quo harum fugiat. Eos quam assumenda id fugit optio aut magni sunt!  Ut iure aliquam vel velit modi sit voluptatibus atque ut corporis sint sit omnis enim a pariatur officiis aut nulla voluptate. In facere incidunt aut sapiente maxime qui quibusdam facilis non officia consectetur sit laboriosam libero aut cupiditate possimus ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed omnis maiores ut aliquid culpa vel nesciunt saepe.  Aut placeat aspernatur aut alias nihil vel neque recusandae et corrupti accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad sunt minus rem earum delectus hic officia iste qui sunt quos non officiis illo vel doloribus perspiciatis. Ab soluta eius sed quidem dolores rem necessitatibus minus 33 minus commodi. Nam repudiandae libero non laboriosam voluptate et saepe fuga vel repudiandae pariatur aut assumenda illo.',
  heading3: 'Onze behandelingen',
  heading2: 'Ons ervaren team',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading9: 'Products and Services',
  heading13: 'Refunds',
  heading4: 'Neem contact met ons op',
  content2:
    'Maak kennis met onze deskundige kinesitherapeuten die klaar staan om u te begeleiden op uw revalidatiepad.',
  content3:
    'Leer meer over de diverse behandelingen die wij aanbieden, van postoperatieve revalidatie tot sportblessures.',
}

ContentList4.propTypes = {
  content4: PropTypes.string,
  content7: PropTypes.string,
  content10: PropTypes.string,
  heading11: PropTypes.string,
  content13: PropTypes.string,
  heading7: PropTypes.string,
  heading12: PropTypes.string,
  content9: PropTypes.string,
  content6: PropTypes.string,
  heading8: PropTypes.string,
  content11: PropTypes.string,
  content1: PropTypes.string,
  heading6: PropTypes.string,
  heading5: PropTypes.string,
  heading1: PropTypes.string,
  heading10: PropTypes.string,
  content5: PropTypes.string,
  heading3: PropTypes.string,
  heading2: PropTypes.string,
  content12: PropTypes.string,
  heading9: PropTypes.string,
  heading13: PropTypes.string,
  heading4: PropTypes.string,
  content2: PropTypes.string,
  content3: PropTypes.string,
}

export default ContentList4
