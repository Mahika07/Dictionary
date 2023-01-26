import React, { Component } from "react";
import DisplayMean from "./DisplayMean";
import Displaysyn from "./Displaysyn";
import DisplayWord from "./DisplayWord";
import welcome from "../welcome.gif";


export default class Show extends Component {


   constructor() {
      super();
      this.state = {
         articles: [],
         loading: false,
         set: false,
         word: "",
         syn: {},
         ant: {}
      };
   }

   onchange = async (e) => {

      this.setState({ word: e.target.value })


   }



   render() {

      return (
         <>
            <form className="d-flex my-4" role="search">
               <span
                  className="algolia-autocomplete"
                  style={{
                     position: "relative",
                     display: "inline-block",
                     direction: "ltr",
                  }}
               >
                  <input
                     tabIndex="1"
                     id="docs-search-input getinput"
                     type="text"
                     placeholder="Search The Word"
                     className="docs-search-input rounded display-block ds-input mx-2"
                     style={{
                        paddingLeft: "0.5em",
                        marginBottom: "0px",
                        height: "2.5em",
                        position: "relative",
                        verticalAlign: "top",
                        fontSize: "1.2em",
                        width: "10em"
                     }}
                     autoComplete="off"
                     spellCheck="false"
                     role="combobox"
                     aria-autocomplete="list"
                     aria-expanded="false"
                     aria-label="search input"
                     aria-owns="algolia-autocomplete-listbox-0"
                     dir="auto"
                     onChange={this.onchange}


                  />
                  <pre
                     aria-hidden="true"
                     style={{
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily:
                           "cera-round-pro ,&quot ,Helvetica, Neue&quot , Helvetica, Arial, sans-serif",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: "700",
                        wordSpacing: "0px",
                        letterSpacing: "normal",
                        textIndent: "0px",
                        textRendering: "auto",
                        textTransform: "none",
                     }}
                  ></pre>


                  <button
                     className="btn btn-dark "
                     style={{ height: "3em", width: "5em" }}
                     type="submit"
                     onClick={async (e) => {

                        e.preventDefault()
                        console.log("hii i am console log part2" + this.state.word)
                        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.word}`
                        let data = await fetch(url);
                        let parse = await data.json();
                        console.log(parse)
                        if (parse.title === "No Definitions Found") {

                           this.props.showalert(`${parse.message}`)
                           this.setState({ loading: false, set: false })
                        }
                        else {
                           this.setState({ articles: parse, loading: true, set: true });
                        }

                        document.querySelector('input').value = ''


                     }}

                  >
                     Search                        </button>


               </span>
            </form>

            {!this.state.set && <div style={{ textAlign: 'center', }}>
               <img src={welcome} alt="welcome" style={{ width: '35em', marginLeft: "-5em" }}></img>
            </div>
            }
            {this.state.loading && <div>
               {this.state.articles.slice(0, 1).map((Element, i) => {
                  return (
                     <DisplayWord
                        key={Element.word}
                        word={Element.word}
                        audio={Element.phonetics.length === 0 ? '.' : Element.phonetics[0].audio === '' ? '.' : Element.phonetics[0].audio}
                     />
                  );
               })
               }
               < div className="container" >
                  <div
                     id="carouselExampleControls"
                     className="carousel carousel-dark slide"
                     data-bs-ride="carousel"
                  >
                     <div className="carousel-inner">
                        {this.state.articles[0].meanings[0].definitions.map(
                           (Element, i) => {
                              return (
                                 <div
                                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                                    key={i}

                                 >
                                    <DisplayMean
                                       definition={Element.definition}
                                       example={Element.example}
                                    />
                                 </div>
                              );
                           }
                        )}
                     </div>
                     <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                     >
                        <span
                           className="carousel-control-prev-icon"
                           aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                     </button>
                     <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                     >
                        <span
                           className="carousel-control-next-icon"
                           aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                     </button>
                  </div>
               </div>

               {
                  this.state.articles[0].meanings.slice(0, 1).map((Element) => {
                     return (<Displaysyn

                        synonyms={Element.synonyms}


                        antonyms={Element.antonyms}
                     />)

                  })
               }



            </div>

            }

         </>
      );
   }
}
