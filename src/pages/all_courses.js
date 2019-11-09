import React from "react"
import { Link, graphql,StaticQuery } from "gatsby"
import "../components/style/global.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MasterClassBlock from "../components/master_class/master_class_block"

const AllCourses = () => (
  <StaticQuery
    query={graphql`
      query{        
        allContentfulMasterClass(sort: {fields: createdAt, order: ASC}) {
          edges {
            node {
              title
              id
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
    <SEO title="Все мастер-классы" />
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
        <Link className="button_a" to="/">Вернуться на главную</Link>
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
          <textarea placeholder="Ваше сообщение" />
          <button className="button_a" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </Layout>
    )}
  />
)

export default AllCourses
