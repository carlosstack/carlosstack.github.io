import React from "react";
import "./Tags.scss";
import AngularImg from "../../assets/tags/angular.svg";
import ReactImg from "../../assets/tags/react.png";
import TypescriptImg from "../../assets/tags/typescript.png";
import HerokuImg from "../../assets/tags/heroku.png";
import MySQLImg from "../../assets/tags/mysql.png";
import PythonImg from "../../assets/tags/python.png";
import GitImg from "../../assets/tags/git.png";
import VsCodeImg from "../../assets/tags/vscode.svg";
import FirebaseImg from "../../assets/tags/firebase.png";


const Tag = (props) => (
  <div className="Tag">
    <img src={props.img} alt={props.name} />
  </div>
);

export const ReactTag = (props) => <Tag img={ReactImg} name="React Js" />;
export const AngularTag = (props) => <Tag img={AngularImg} name="Angular 10+" />;
export const TypescriptTag = (props) => <Tag img={TypescriptImg} name="Typescript" />;
export const HerokuTag = (props) => <Tag img={HerokuImg} name="Heroku" />;
export const MySqlTag = (props) => <Tag img={MySQLImg} name="MySQL" />;
export const PythonTag = (props) => <Tag img={PythonImg} name="Python" />;
export const FirebaseTag = (props) => <Tag img={FirebaseImg} name="Firebase" />;
export const GitTag = (props) => <Tag img={GitImg} name="Git" />;
export const VsCodeTag = (props) => <Tag img={VsCodeImg} name="Visual Studio Code" />;


