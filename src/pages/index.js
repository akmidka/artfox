import React from "react"
import { Link, graphql,StaticQuery } from "gatsby"
import "../components/style/global.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import team from "../images/team.png"
import Slider from "react-slick"
import Img from 'gatsby-image'
import MasterClassBlock from "../components/master_class/master_class_block"
var settings = {
  dots: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};
const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query{
        allContentfulStudentsWorks {
          edges {
            node {
              work {
                fluid{
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
        allContentfulMasterClass {
          edges {
            node {
              title
              subtitle
              date(formatString: "DD.MM.YYYY HH:mm")
              image {
                fluid{
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
<Layout>
    <SEO title="Домашняя страница" />
    <div className="container_wrapper hero">
      <div className="container container_hero">
        <h1>
        Изостудия ARTFOX
        </h1>
        <h2>
        создавая прекрасное
        </h2>
        <p>Художественная мастерская и творческие занятия</p>
      </div>
    </div>
    <div className="container_wrapper about" id="about_us">
      <div className="container container_about">
        <h1>
        Кто мы?
        </h1>
        <h4>
        Студия рисования для детей и взрослых
        </h4>
        <p>
          С 2000 года студия «Изостудия ARTFOX» объединяет под своим началом
          начинающих и уже состоявшихся художников, предоставляя им все
          условия для совместного творчества и профессионального роста. 
          Мы считаем, что творческое начало есть в каждом, поэтому наша 
          задача № 1 — помочь найти его и выразить. Каждый из наших авторов 
          имеет опыт работы и в студии, и в учебном классе, а значит владеет 
          не только художественными техниками, но и методиками их 
          преподавания. </p>
          <p>
          Аренда студии и образовательные программы доступны любому 
          желающему по запросу при условии предварительного бронирования. 
          Обращайтесь, чтобы подробнее узнать о наших предложениях.
        </p>
      </div>
    </div>
    
    <div className="container_wrapper mission">
      <div className="container container_mission">
        <h1>
          Наша миссия
        </h1>
        <h4>
          Студия рисования для детей и взрослых
        </h4>
        <p>
          Школа рисования «Изостудия ARTFOX» — авторитетное и процветающее 
          сообщество в г. Yakutsk. Мы давно и продуктивно сотрудничаем со 
          студентами и состоявшимися художниками, стремясь раскрыть их 
          творческий потенциал, а также сами активно занимаемся искусством. 
          На групповых и индивидуальных занятиях мы помогаем взрослым, 
          подросткам и детям пробудить в себе внутреннего художника. 

          Арт-студия «Изостудия ARTFOX» предоставляет творцам и своим 
          посетителям возможность увлекательно и продуктивно заниматься 
          искусством, развивая свое творческое начало и приобретая новые 
          навыки.
        </p>
      </div>
    </div>
    <div className="container_wrapper values">
      <div className="container container_values">
        <h1>
          Наши ценности в мире искусства
        </h1>
        <h4>
          Вдохновение и творческий подход
        </h4>
        <p>
          С 2000 года студия «Изостудия ARTFOX» объединяет под своим началом
          начинающих и уже состоявшихся художников, предоставляя им все
          условия для совместного творчества и профессионального роста. 
          Мы считаем, что творческое начало есть в каждом, поэтому наша 
          задача № 1 — помочь найти его и выразить. Каждый из наших авторов 
          имеет опыт работы и в студии, и в учебном классе, а значит владеет 
          не только художественными техниками, но и методиками их 
          преподавания. 
        </p>
      </div>
    </div>
    <div className="container_wrapper works">
      <div className="container container_works">
        <h1>
          Работы наших студентов
        </h1>
        <div>
            <Slider {...settings}>
            {data.allContentfulStudentsWorks.edges.map(document => (
              <Img fluid={document.node.work.fluid}/>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="container_wrapper team"  id="our_team">
      <div className="container container_team">
        <h1>
          Наша команда
        </h1>
        <img src={team}/>
        <p>
          Наша команда включает только блаблабла блаблабла блаблабла блаблабла блаблабла
          блаблабла блаблабла блаблабла блаблабла блаблабла блаблабла блаблабла блаблабла 
          блаблабла блаблабла блаблабла блаблабла блаблабла блаблабла блаблабла блаблабла
          блаблабла блаблабла блаблабла блаблабла блаблабл
        </p>
      </div>
    </div>
    <div className="container_wrapper master_class" id="master_class">
      <div className="container container_master_class">
        <h1>
          Наши ближайшие мастер-классы
        </h1>
        <div className="mk">
          {data.allContentfulMasterClass.edges.map(document => (
              <MasterClassBlock
              key={document.node.id}
                title={document.node.title}
                subtitle={document.node.subtitle}
                date={document.node.date}
                image={document.node.image.fluid}
              />
          ))}
          
        </div>
        <Link to="/">Увидеть все мастер-классы</Link>
      </div>
    </div>
    <div className="container_wrapper contact" id="contact">
      <div className="container container_contact">
        <h1>
          Связаться с нами
        </h1>
        <p>
          Якутск, Петровского, 19<br/>
          artfox.yakutsk@gmail.com<br/>
          89243614055
        </p>
        <form>
          <h1>
            Или можете написать нам
          </h1>
          <div className="form_top">
            <input placeholder="Имя*"/>
            <input placeholder="Телефон"/>
          </div>
          <input placeholder="Email*"/>
          <textarea placeholder="Ваше сообщение"/>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </Layout>
    )}
  />
)

export default IndexPage
