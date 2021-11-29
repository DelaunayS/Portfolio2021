import MeteoImg from '../../img/Meteo.webp'
import DonneesD3Img from '../../img/DonneesD3.webp'
import MaternelleImg from '../../img/Maternelle.webp'
import TicTacToeImg from '../../img/TicTacToe.webp'
import TPImg from '../../img/TP.webp'
import Wikipedia from '../../img/Wikipedia.webp'

const data=[
    {src:MeteoImg, 
    title:'Météo',
    alt:'Slide1',
    text:"Application React/Bootstrap permettant de donner la météo en fonction de la position de l'utilisateur. On peut aussi faire une recherche de la météo sur une commune dans le monde entier. L'API utilisé pour les données est Weather API : https://openweathermap.org/api. ",
    ref:'https://delaunays.github.io/Meteo/'     
    },
    {src:Wikipedia, 
        title:'Visualiseur Wikipédia',
        alt:'Slide2',
        text:"Application React/Bootstrap permettant de faire une recherche en français à partir de mot clé dans l'API de Wikipedia. On peut aussi faire une recherche aléatoire d'article dans la base de données des articles de Wikipédia.",
        ref:'https://delaunays.github.io/VisualiseurWikipedia/'            
        },
    {src:DonneesD3Img, 
        title:'Librairie D3.js',
        alt:'Slide3',
        text:"Création de tableaux, de graphiques et de cartes en utilisant la bibliothèque D3.js.",
        ref:'https://delaunays.github.io/DonneesD3/'       
        },
    {src:MaternelleImg, 
        title:'Jeux en maternelle',
        alt:'Slide4',
        text:"Ensemble de jeux dans le domaine des lettres et des nombres à destination d'enfants en maternelle. Plusieurs niveaux de difficultés pour s'adapter aux enfants.",
        ref:'https://delaunays.github.io/WebMaternelle/'      
        },
    {src:TicTacToeImg, 
        title:'Jeux du "Tic Tac Toe"',
        alt:'Slide5',
        text:"Jeux du morpion réalisé en React/Bootstrap. Possibilité de jouer à 1 ou 2 joueurs : la version 1 joueur poermet d'affronter un IA de niveau 'faible'.",
        ref:'https://delaunays.github.io/TicTacToe/'       
        },
    {src:TPImg, 
        title:'Travaux Pratiques',
        alt:'Slide6',
        text:"Ensemble de travaux pratiques réalisés pour résoudre les propositions d'exercices d'OpenClassrooms et freeCodeCamp.",
        ref:'https://delaunays.github.io/TP_portfolio/'       
        }  
]

export default data