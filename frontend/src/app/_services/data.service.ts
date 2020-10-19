import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { DocsService } from './doc.service';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit, OnDestroy {
  private docsSub: Subscription;
  private dataChangedListener = new Subject<
    {
      id: number;
      title: string;
      team: string;
      position: number;
      createdAt: string;
      updatedAt: string;
      createdBy: string;
      manager: string;
      status: string;
      submission: number;
      description: string;
    }[]
  >();
  private candidateChangedListener = new Subject<
    {
      id: number;
      fullName: string;
      email: string;
      phone: string;
      jobs: number[];
      resume: string;
    }[]
  >();
  private candidates1 = [];

  private rowData = [
    {
      id: 1000,
      title: 'Azure Developer',
      team: 'Solvex Dominicana',
      position: 2,
      submission: 0,
      manager: 'Rosalia Arias',
      createdAt: '10/02/2020',
      updatedAt: '10/05/2020',
      createdBy: 'Elvis Cocho',
      status: 'Open',
      skills: [
        'Azure',
        'Microsoft',
        'Cloud'
      ],
      description: 'Ven y ganate la funda con nosotros...'
    },
    {
      id: 100,
      title: 'Web Developer',
      team: 'Microsoft',
      position: 2,
      submission: 0,
      manager: 'Caldwell Herring',
      createdAt: '01/27/2020',
      updatedAt: '09/01/2020',
      createdBy: 'Avis Serrano',
      status: 'Closed',
      skills: [
        'HTML',
        'Angular',
        'Azure'
      ],
      description: 'Esse non cillum consectetur magna cupidatat amet aliqua. Qui sit enim Lorem sit mollit ullamco et exercitation enim ipsum exercitation. Consequat exercitation voluptate anim anim cupidatat est est esse Lorem magna amet magna fugiat anim. Ipsum ut ad laborum mollit labore laboris est excepteur. Anim commodo laborum incididunt consectetur culpa nulla eiusmod amet.\r\n'
    },
    {
      id: 1100,
      title: 'UI/UX Developer',
      team: 'Amazone',
      position: 2,
      submission: 0,
      manager: 'Delacruz Ford',
      createdAt: '02/22/2020',
      updatedAt: '08/02/2020',
      createdBy: 'Mary Mcmahon',
      status: 'Closed',
      skills: [
        'C++',
        'C#',
        'Azure'
      ],
      description: 'Amet pariatur proident laboris enim dolore in ad officia. Voluptate amet eiusmod duis aliquip nostrud velit amet qui nostrud anim esse reprehenderit minim laboris. Enim labore laboris officia excepteur dolore ea cupidatat.\r\n'
    },
    {
      id: 2100,
      title: 'Software Developer',
      team: 'Amazone',
      position: 6,
      submission: 0,
      manager: 'Case Oconnor',
      createdAt: '05/31/2020',
      updatedAt: '09/05/2020',
      createdBy: 'Workman Merrill',
      status: 'Active',
      skills: [
        'JavaScript',
        'Angular'
      ],
      description: 'Est Lorem duis aute dolor amet eiusmod dolor proident. Fugiat quis magna quis fugiat ad deserunt fugiat ut quis qui. Est sunt eiusmod aute enim. Sunt cillum veniam culpa ex in magna dolore.\r\n'
    },
    {
      id: 3100,
      title: 'BackEnd Developer',
      team: 'Microsoft',
      position: 6,
      submission: 0,
      manager: 'Alba Bird',
      createdAt: '04/21/2020',
      updatedAt: '09/09/2020',
      createdBy: 'Belinda Conway',
      status: 'Active',
      skills: [
        'React',
        'Angular',
        'Java'
      ],
      description: 'Proident labore in aliquip ullamco cupidatat nisi excepteur sunt duis cupidatat dolor voluptate ea. Ipsum sit ipsum consequat voluptate ad excepteur consectetur tempor mollit non. Esse est fugiat est nostrud mollit excepteur ad ad ullamco ullamco. Veniam in sit sint qui pariatur proident excepteur non. Magna excepteur exercitation et reprehenderit sit aliquip laboris nulla irure aute duis nulla consectetur.\r\n'
    },
    {
      id: 4100,
      title: 'BackEnd Developer',
      team: 'Google',
      position: 3,
      submission: 0,
      manager: 'Alana Cooley',
      createdAt: '12/20/2019',
      updatedAt: '08/15/2020',
      createdBy: 'Mueller Spence',
      status: 'Closed',
      skills: [
        'JavaScript',
        'Java',
        'Azure'
      ],
      description: 'Deserunt excepteur consequat et esse cupidatat eiusmod excepteur nostrud quis aliquip est est dolor id. Elit ut eu ut non labore laborum laboris exercitation laboris. Elit proident commodo deserunt veniam nostrud aliquip ipsum sunt sunt duis enim sint pariatur cupidatat. Aliqua dolore Lorem deserunt reprehenderit ullamco laboris veniam sunt.\r\n'
    },
    {
      id: 5100,
      title: 'UI/UX Developer',
      team: 'Microsoft',
      position: 2,
      submission: 0,
      manager: 'Yesenia Hughes',
      createdAt: '01/30/2020',
      updatedAt: '09/07/2020',
      createdBy: 'Woodward Dunlap',
      status: 'Active',
      skills: [
        'C++',
        'Java',
        'AWS'
      ],
      description: 'Laborum nisi aute adipisicing ex ex velit eiusmod sint incididunt quis nulla. Adipisicing id in excepteur ea mollit consequat excepteur. Id voluptate quis cillum consequat mollit non ad laboris qui dolor qui. Exercitation adipisicing incididunt voluptate laboris ullamco officia consequat consequat ad exercitation aute cillum amet. Nisi elit ut deserunt magna dolor veniam occaecat. Nostrud ad consequat nisi proident Lorem non officia.\r\n'
    },
    {
      id: 6100,
      title: 'BackEnd Developer',
      team: 'Amazone',
      position: 5,
      submission: 0,
      manager: 'Jane Cochran',
      createdAt: '05/21/2020',
      updatedAt: '09/25/2020',
      createdBy: 'Ramsey Savage',
      status: 'Closed',
      skills: [
        'Azure',
        'Angular',
        'C#'
      ],
      description: 'Non incididunt magna ut duis adipisicing qui est esse magna ipsum id laboris. Tempor minim culpa sit ex tempor velit dolore id veniam duis ad cupidatat laborum deserunt. Voluptate proident ut pariatur labore nostrud nisi consectetur sunt pariatur ipsum deserunt dolore id ea. Aute consequat consectetur velit exercitation quis dolor dolor adipisicing ea reprehenderit dolor mollit ad do.\r\n'
    },
    {
      id: 7100,
      title: 'Angular Developer',
      team: 'MS (Azure)',
      position: 5,
      submission: 0,
      manager: 'Adrian Wilson',
      createdAt: '05/03/2020',
      updatedAt: '09/14/2020',
      createdBy: 'Stone Cross',
      status: 'Closed',
      skills: [
        'Azure',
        'React',
        'Java'
      ],
      description: 'Commodo fugiat aliqua reprehenderit qui minim. Tempor deserunt eu nostrud nulla sit reprehenderit. Veniam minim elit est eu laboris voluptate minim non amet fugiat. Commodo voluptate est magna velit adipisicing id aliquip commodo esse deserunt esse consequat. Aliquip ad mollit sunt anim nostrud in aliqua id dolore. Aliqua ipsum officia nostrud irure aute consectetur labore culpa et commodo consequat esse velit. Aliqua Lorem amet eu aute deserunt mollit excepteur ipsum est aute incididunt.\r\n'
    },
    {
      id: 8100,
      title: 'BackEnd Developer',
      team: 'Amazone',
      position: 2,
      submission: 0,
      manager: 'Virgie Ingram',
      createdAt: '01/02/2020',
      updatedAt: '08/07/2020',
      createdBy: 'Delia Cash',
      status: 'Processing',
      skills: [
        'JavaScript',
        'C#',
        'AWS'
      ],
      description: 'Ea aliquip incididunt cupidatat quis. Esse sit sint laboris esse esse cupidatat veniam qui sint culpa minim. Ipsum laborum duis laboris excepteur anim do nostrud incididunt. Eiusmod enim ipsum tempor in elit aliqua ad fugiat veniam fugiat qui. Magna in occaecat officia veniam nisi sunt anim mollit. In consequat aliqua eiusmod aliquip culpa sint exercitation laboris occaecat enim.\r\n'
    },
    {
      id: 9100,
      title: 'UI/UX Developer',
      team: 'Google',
      position: 2,
      submission: 0,
      manager: 'Courtney Parker',
      createdAt: '02/14/2020',
      updatedAt: '08/16/2020',
      createdBy: 'Santiago Melendez',
      status: 'Processing',
      skills: [
        'Angular',
        'JavaScript',
        'HTML'
      ],
      description: 'Reprehenderit cillum ex cupidatat quis cillum voluptate elit labore nulla eiusmod enim labore. Elit reprehenderit minim voluptate anim nulla Lorem ullamco ullamco do do. Sunt incididunt esse ex dolor minim non. In laborum ex fugiat aliqua velit occaecat magna nisi ad et qui do. Ipsum elit proident ut ullamco pariatur consectetur minim commodo deserunt. Laboris nostrud nisi anim culpa et ex voluptate ullamco est nostrud.\r\n'
    },
    {
      id: 10100,
      title: 'UI/UX Developer',
      team: 'Google',
      position: 2,
      submission: 0,
      manager: 'Kristi Shannon',
      createdAt: '04/30/2020',
      updatedAt: '08/21/2020',
      createdBy: 'Kathie Merritt',
      status: 'Closed',
      skills: [
        'C++',
        'JavaScript',
        'Java'
      ],
      description: 'Sunt excepteur consequat magna pariatur est proident dolor. Laborum et cupidatat consectetur cupidatat nisi. Sunt proident eu do consequat eiusmod est ullamco anim Lorem.\r\n'
    },
    {
      id: 11100,
      title: 'UI/UX Developer',
      team: 'Microsoft',
      position: 2,
      submission: 0,
      manager: 'Estelle Hodges',
      createdAt: '03/17/2020',
      updatedAt: '09/16/2020',
      createdBy: 'Shari Conley',
      status: 'Active',
      skills: [
        'Azure',
        'C++',
        'React'
      ],
      description: 'Laboris officia occaecat sint exercitation. Nostrud esse dolor ut laborum ut dolor sint pariatur ullamco. Nulla non nisi ad non commodo est adipisicing eu dolor. Officia fugiat aliqua ea consequat elit incididunt cillum quis qui voluptate nostrud duis aliquip officia. Adipisicing aliqua laborum quis veniam irure duis elit consequat. Ullamco do culpa dolor eu deserunt deserunt duis tempor. Quis in proident do nostrud quis ipsum magna est veniam magna.\r\n'
    },
    {
      id: 12100,
      title: 'Angular Developer',
      team: 'Amazone',
      position: 3,
      submission: 0,
      manager: 'Michael Soto',
      createdAt: '05/11/2020',
      updatedAt: '09/03/2020',
      createdBy: 'Lindsey Mcfadden',
      status: 'Closed',
      skills: [
        'JavaScript',
        'C++',
        'C#'
      ],
      description: 'Magna irure aliqua dolore nulla exercitation ex ad. Eu do esse nulla sit officia cupidatat adipisicing incididunt. Dolor incididunt deserunt reprehenderit fugiat reprehenderit laborum aliqua est reprehenderit id. Pariatur adipisicing sint do nulla qui consectetur minim culpa cillum velit dolor. Exercitation anim consectetur mollit magna cillum irure ut.\r\n'
    },
    {
      id: 13100,
      title: 'BackEnd Developer',
      team: 'Microsoft',
      position: 2,
      submission: 0,
      manager: 'Kasey Goodman',
      createdAt: '04/18/2020',
      updatedAt: '08/15/2020',
      createdBy: 'Hoffman Kline',
      status: 'Closed',
      skills: [
        'C#',
        'AWS',
        'HTML'
      ],
      description: 'Officia consequat Lorem nisi cupidatat qui sunt ad duis ex. Consectetur aliqua sit voluptate fugiat incididunt. Esse mollit deserunt anim mollit ullamco sit consectetur ea aliquip cupidatat. Dolor nostrud est quis ipsum dolor elit dolor ipsum qui aute ut incididunt. Irure do dolor aliquip sint velit excepteur tempor. Ex quis commodo labore adipisicing est anim consectetur excepteur cupidatat mollit cillum. Fugiat tempor voluptate consectetur anim ipsum irure.\r\n'
    },
    {
      id: 14100,
      title: 'BackEnd Developer',
      team: 'Google',
      position: 6,
      submission: 0,
      manager: 'Lesa Hammond',
      createdAt: '02/10/2020',
      updatedAt: '09/06/2020',
      createdBy: 'Solomon Klein',
      status: 'Active',
      skills: [
        'C#',
        'Angular',
        'C++'
      ],
      description: 'Sit minim dolor aute ipsum id non tempor dolore dolor aliqua. Voluptate fugiat ea nisi ullamco et ullamco est ullamco eu. Voluptate labore nulla veniam deserunt qui sunt duis enim tempor non pariatur consequat. Lorem exercitation pariatur Lorem elit laboris magna officia. Amet nostrud cupidatat reprehenderit sit minim excepteur. Aute et veniam ad irure est laboris.\r\n'
    },
      {
        id: 81100000,
        title: 'Software Developer',
        team: 'Microsoft',
        position: 6,
        submission: 0,
        manager: 'Marsha Ayers',
        createdAt: '01/07/2020',
        updatedAt: '09/11/2020',
        createdBy: 'Stephens Barton',
        status: 'Closed',
        skills: [
          'AWS',
          'React',
          'Angular'
        ],
        description: 'Tempor excepteur anim voluptate aliquip. Anim aliquip exercitation qui et. Culpa labore consectetur aute labore labore sunt ipsum occaecat veniam reprehenderit non reprehenderit ipsum veniam. Proident aliquip et laboris cupidatat cillum aliquip quis. Sint fugiat nulla fugiat ipsum deserunt mollit nostrud magna consectetur eiusmod. Do et culpa laboris tempor occaecat consequat. Sit cillum nostrud sint aliquip est laborum in occaecat et mollit Lorem nisi occaecat.\r\n'
      },
      {
        id: 82100000,
        title: 'Web Developer',
        team: 'Amazone',
        position: 5,
        submission: 0,
        manager: 'Hollie Nguyen',
        createdAt: '04/04/2020',
        updatedAt: '09/04/2020',
        createdBy: 'Maribel Massey',
        status: 'Processing',
        skills: [
          'JavaScript',
          'React',
          'C#',
          'Angular'
        ],
        description: 'Reprehenderit irure deserunt exercitation amet incididunt tempor consectetur ut ad dolor adipisicing amet mollit id. Fugiat officia voluptate sint ex nulla. Tempor exercitation tempor esse veniam anim sunt do.\r\n'
      },
      {
        id: 83100000,
        title: 'Software Developer',
        team: 'Microsoft',
        position: 6,
        submission: 0,
        manager: 'Krystal Frank',
        createdAt: '05/02/2020',
        updatedAt: '09/29/2020',
        createdBy: 'Baird Atkins',
        status: 'Active',
        skills: [
          'React',
          'Java',
          'AWS'
        ],
        description: 'Nisi voluptate aliquip elit mollit reprehenderit. Nulla laborum ea mollit ullamco Lorem qui dolor sunt veniam excepteur minim commodo. Fugiat deserunt magna aute dolore magna labore. Reprehenderit sunt reprehenderit aliqua labore officia non et excepteur duis qui eu laboris officia. Eiusmod duis ad laboris sunt tempor labore ad enim.\r\n'
      },
      {
        id: 84100000,
        title: 'Software Developer',
        team: 'Amazone',
        position: 3,
        submission: 0,
        manager: 'Betsy Frost',
        createdAt: '06/26/2020',
        updatedAt: '09/04/2020',
        createdBy: 'Hall Kelly',
        status: 'Processing',
        skills: [
          'Angular',
          'C++',
          'HTML'
        ],
        description: 'Magna exercitation ad veniam laboris Lorem. Culpa consectetur ipsum exercitation deserunt non ut reprehenderit. Laborum pariatur consequat dolore laborum do aliqua incididunt do adipisicing et commodo consequat culpa mollit. Incididunt ex deserunt consequat aliquip aute est quis veniam ex sit laborum.\r\n'
      },
      {
        id: 85100000,
        title: 'UI/UX Developer',
        team: 'Amazone',
        position: 2,
        submission: 0,
        manager: 'Rosa Ward',
        createdAt: '01/28/2020',
        updatedAt: '09/06/2020',
        createdBy: 'Wiley Burris',
        status: 'Active',
        skills: [
          'Angular',
          'React',
          'C#',
          'HTML'
        ],
        description: 'Dolore sit sint fugiat excepteur. Nostrud minim nostrud adipisicing tempor culpa. Incididunt ex proident minim esse quis aliquip elit. Amet est duis qui consequat est.\r\n'
      },
      {
        id: 86100000,
        title: 'React Developer',
        team: 'Microsoft',
        position: 6,
        submission: 0,
        manager: 'Chapman Reed',
        createdAt: '12/16/2019',
        updatedAt: '09/20/2020',
        createdBy: 'Hattie Kemp',
        status: 'Closed',
        skills: [
          'Angular',
          'C#',
          'React',
          'JavaScript'
        ],
        description: 'Ex fugiat enim ipsum commodo anim sint aliquip proident duis quis exercitation aute pariatur commodo. In Lorem aliquip deserunt nulla pariatur fugiat minim consequat tempor. Ut incididunt exercitation tempor exercitation incididunt nulla aliquip incididunt occaecat dolore nulla.\r\n'
      },
      {
        id: 87100000,
        title: 'Angular Developer',
        team: 'MS (Azure)',
        position: 2,
        submission: 0,
        manager: 'Marquita Douglas',
        createdAt: '04/07/2020',
        updatedAt: '09/29/2020',
        createdBy: 'Isabel Hull',
        status: 'Processing',
        skills: [
          'C#',
          'Java',
          'Angular',
          'Azure'
        ],
        description: 'Commodo eu Lorem ea esse commodo tempor Lorem dolore aliquip non voluptate sunt eu officia. Do mollit fugiat sit sint aliqua dolor cupidatat. Labore consectetur ex dolor nostrud fugiat cillum ipsum aliqua laboris nisi. Sit ad do ullamco dolore cillum consequat eu qui elit eu. Incididunt aliqua ex non est. Lorem esse aliqua eiusmod cillum duis exercitation ipsum tempor.\r\n'
      },
      {
        id: 88100000,
        title: 'BackEnd Developer',
        team: 'Amazone',
        position: 5,
        submission: 0,
        manager: 'Pierce Morrison',
        createdAt: '06/03/2020',
        updatedAt: '08/25/2020',
        createdBy: 'Sophia Campbell',
        status: 'Processing',
        skills: [
          'Java',
          'C++',
          'Angular',
          'HTML'
        ],
        description: 'Laborum occaecat Lorem aute qui deserunt culpa dolore mollit consectetur voluptate magna cillum non. Eiusmod cupidatat duis deserunt ullamco voluptate. Magna in nisi deserunt sint eiusmod culpa pariatur sunt adipisicing veniam amet. Aute aliqua incididunt nulla do in occaecat. Duis cillum ullamco ipsum commodo consequat mollit et laboris. Dolore et ad elit proident amet tempor incididunt consequat nisi anim. Irure velit pariatur excepteur commodo exercitation occaecat veniam magna sit magna.\r\n'
      },
      {
        id: 89100000,
        title: 'BackEnd Developer',
        team: 'Microsoft',
        position: 5,
        submission: 0,
        manager: 'Carey Guerra',
        createdAt: '01/26/2020',
        updatedAt: '09/09/2020',
        createdBy: 'Estrada Cantrell',
        status: 'Processing',
        skills: [
          'React',
          'HTML',
          'C#',
          'Angular'
        ],
        description: 'Incididunt occaecat ipsum mollit irure nulla aute dolor officia amet pariatur aliquip excepteur. Consectetur magna do tempor labore velit. Proident sit ea eu duis laboris minim aute esse sunt deserunt velit aute. Dolore esse adipisicing occaecat dolore consequat.\r\n'
      },
      {
        id: 90100000,
        title: 'React Developer',
        team: 'Amazone',
        position: 3,
        submission: 0,
        manager: 'Dunn Kirby',
        createdAt: '07/17/2020',
        updatedAt: '09/01/2020',
        createdBy: 'Peck Sharp',
        status: 'Active',
        skills: [
          'HTML',
          'AWS',
          'JavaScript'
        ],
        description: 'Fugiat dolor exercitation est ea quis ea nisi amet mollit sunt. Amet Lorem minim exercitation aliquip ut in adipisicing duis minim consectetur culpa. Consequat ad consequat veniam consequat consectetur in ullamco deserunt excepteur eiusmod cupidatat commodo. Cupidatat veniam dolore irure dolore elit do aute proident eu.\r\n'
      },
      {
        id: 91100000,
        title: 'React Developer',
        team: 'Microsoft',
        position: 2,
        submission: 0,
        manager: 'Herminia Ramsey',
        createdAt: '12/03/2019',
        updatedAt: '08/03/2020',
        createdBy: 'Koch Dotson',
        status: 'Closed',
        skills: [
          'Azure',
          'JavaScript',
          'React'
        ],
        description: 'Laboris id consectetur velit deserunt culpa exercitation aliquip reprehenderit esse anim proident deserunt velit deserunt. Non excepteur incididunt amet voluptate consectetur elit ad exercitation mollit in mollit. Magna cillum ullamco commodo dolore aliqua aliquip aute ullamco in nostrud. Nulla consequat officia anim cillum sint. Laborum ipsum anim sunt in anim. Elit deserunt eiusmod fugiat ea aute aliquip.\r\n'
      },
      {
        id: 92100000,
        title: 'Software Developer',
        team: 'Amazone',
        position: 5,
        submission: 0,
        manager: 'Burnett Vega',
        createdAt: '07/11/2020',
        updatedAt: '09/12/2020',
        createdBy: 'Haley Schmidt',
        status: 'Processing',
        skills: [
          'Java',
          'AWS',
          'C++'
        ],
        description: 'Voluptate aute exercitation laboris sunt officia incididunt fugiat laboris non est. Sit Lorem Lorem sit exercitation nostrud nulla adipisicing aliquip aute anim pariatur deserunt in eu. Pariatur sit adipisicing excepteur esse aliquip. Cupidatat ullamco duis in ullamco adipisicing culpa nisi. Dolor et ea irure reprehenderit ipsum enim exercitation occaecat.\r\n'
      },
      {
        id: 93100000,
        title: 'Angular Developer',
        team: 'Microsoft',
        position: 2,
        submission: 0,
        manager: 'Mcdowell Leblanc',
        createdAt: '06/15/2020',
        updatedAt: '08/16/2020',
        createdBy: 'Rojas Alvarado',
        status: 'Processing',
        skills: [
          'Azure',
          'React',
          'AWS',
          'C++'
        ],
        description: 'Exercitation ut tempor pariatur cillum consectetur. Veniam cillum minim cillum proident dolore occaecat consequat ullamco occaecat non occaecat nostrud amet culpa. Consectetur exercitation tempor qui irure. Aute sunt id eu proident amet tempor esse sint nostrud fugiat deserunt sit. Eiusmod ut commodo consequat incididunt reprehenderit.\r\n'
      },
      {
        id: 94100000,
        title: 'Web Developer',
        team: 'MS (Azure)',
        position: 5,
        submission: 0,
        manager: 'Cotton Walls',
        createdAt: '01/14/2020',
        updatedAt: '09/26/2020',
        createdBy: 'Allen Conner',
        status: 'Processing',
        skills: [
          'Java',
          'Azure',
          'React',
          'JavaScript'
        ],
        description: 'Incididunt duis proident Lorem non et laboris duis laborum sit cillum fugiat adipisicing esse pariatur. Officia mollit dolore esse labore nisi ut velit adipisicing. Adipisicing nisi exercitation proident dolor et aliquip id.\r\n'
      },
      {
        id: 95100000,
        title: 'Web Developer',
        team: 'Amazone',
        position: 2,
        submission: 0,
        manager: 'Latoya Gates',
        createdAt: '12/26/2019',
        updatedAt: '09/28/2020',
        createdBy: 'Martin Welch',
        status: 'Processing',
        skills: [
          'Java',
          'HTML',
          'React'
        ],
        description: 'Id ex laborum qui qui. Occaecat magna dolor occaecat qui nisi non est exercitation proident. Sit enim enim nisi pariatur esse ex in commodo fugiat deserunt. Aute pariatur laborum proident magna Lorem in ex dolor exercitation officia laboris laboris. Id Lorem excepteur quis occaecat ad eiusmod.\r\n'
      },
      {
        id: 96100000,
        title: 'Angular Developer',
        team: 'Amazone',
        position: 2,
        submission: 0,
        manager: 'James Roman',
        createdAt: '05/03/2020',
        updatedAt: '09/11/2020',
        createdBy: 'Kate Rose',
        status: 'Active',
        skills: [
          'Angular',
          'C#',
          'Java'
        ],
        description: 'In in cillum sit id excepteur laboris proident. Velit officia veniam consectetur magna eu. Tempor occaecat ea nisi culpa id. Occaecat sit nisi elit aliquip mollit. Esse mollit et cillum nisi culpa culpa consequat. Laborum mollit commodo laboris mollit. Sit duis amet do qui excepteur exercitation officia ut id.\r\n'
      },
      {
        id: 97100000,
        title: 'UI/UX Developer',
        team: 'Amazone',
        position: 3,
        submission: 0,
        manager: 'Mclean Cabrera',
        createdAt: '02/17/2020',
        updatedAt: '09/29/2020',
        createdBy: 'Ashlee Hamilton',
        status: 'Active',
        skills: [
          'Java',
          'C++',
          'HTML'
        ],
        description: 'Duis magna fugiat adipisicing Lorem ut voluptate ea deserunt velit consequat. Ad ipsum aute aute incididunt id exercitation consequat voluptate. Culpa incididunt eu sunt culpa sint esse deserunt esse consectetur eu quis sit. Laborum pariatur ad sint voluptate. Sunt enim laboris incididunt id proident deserunt anim voluptate.\r\n'
      },
      {
        id: 98100000,
        title: 'Angular Developer',
        team: 'Google',
        position: 3,
        submission: 0,
        manager: 'Alta Floyd',
        createdAt: '07/06/2020',
        updatedAt: '09/12/2020',
        createdBy: 'Cantu Randolph',
        status: 'Processing',
        skills: [
          'HTML',
          'Azure',
          'Java',
          'C#'
        ],
        description: 'Anim nulla exercitation aliquip adipisicing consectetur qui nisi labore voluptate. Consequat id in velit cupidatat amet irure elit dolor esse reprehenderit. Aute enim quis non ipsum ullamco irure ad velit. Id nostrud officia excepteur do non id qui cillum cupidatat aliqua adipisicing cupidatat sit. Pariatur aliqua do tempor irure sit ea sint excepteur qui cillum cillum ex. Voluptate irure voluptate voluptate pariatur id eu cupidatat reprehenderit in.\r\n'
      },
      {
        id: 99100000,
        title: 'Angular Developer',
        team: 'MS (Azure)',
        position: 6,
        submission: 0,
        manager: 'Glenn Bolton',
        createdAt: '02/04/2020',
        updatedAt: '08/12/2020',
        createdBy: 'Milagros Mosley',
        status: 'Closed',
        skills: [
          'Angular',
          'HTML',
          'Azure'
        ],
        description: 'Excepteur enim consectetur proident nulla veniam excepteur in eu sit laborum magna. Est mollit commodo proident magna cupidatat consectetur reprehenderit tempor elit culpa voluptate eu fugiat. Est tempor magna in occaecat laborum ex eu cupidatat enim commodo do magna adipisicing. Veniam irure labore minim ullamco proident quis dolor enim.\r\n'
      }
    ];

  constructor(
    private docsService: DocsService,
    private alertify: AlertifyService
  ) {}

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {
    this.docsService.getDocs().subscribe(res => {
      this.candidates1 = res.docs;
    });
    this.docsSub = this.docsService.getDocsUpdateListener().subscribe((res) => {
      this.candidates1 = res.docs;
      this.candidateChangedListener.next([...this.candidates1]);
      this.updateSubs();
    });
  }

  getAllData() {
    this.docsService.getDocs().subscribe(res => {
      this.candidates1 = res.docs;
      this.updateSubs();
    });
    this.docsSub = this.docsService.getDocsUpdateListener().subscribe((res) => {
      this.candidates1 = res.docs;
      this.candidateChangedListener.next([...this.candidates1]);
      this.updateSubs();
      this.dataChangedListener.next([...this.rowData]);
    });
    this.updateSubs();
  }

  cleanSubs() {
    for (const row of this.rowData) {
      row.submission = 0;
    }
  }

  updateSubs() {
    this.cleanSubs();
    for (const candidate of this.candidates1) {
      for (const job of candidate.jobs) {
        for (const row of this.rowData) {
          if (job === row.id) {
            row.submission++;
            break;
          }
        }
      }
    }
    this.dataChangedListener.next([...this.rowData]);
  }

  addData(row: any) {
    const newd = new Date().toLocaleString();
    // tslint:disable-next-line: max-line-length
    this.rowData.unshift(row);
    this.dataChangedListener.next([...this.rowData]);
    this.alertify.success('Job has been added successfully');
  }

  async deleteData(jobs: any) {
    for (const j of jobs) {
    for (let i = 0; i < this.rowData.length; i++) {
        if (this.rowData[i].id === j.data.id) {
          this.rowData.splice(i, 1);
          break;
        }
      }
    }
    this.getAllData();
    if (jobs.length > 1){
      this.alertify.success('Jobs have been deleted successfully');
    }else{
      this.alertify.success('Job has been deleted successfully');
    }
  }

  async deleteforKendo(jobs: any){
    for (const j of jobs) {
    for (let i = 0; i < this.rowData.length; i++) {
        if (this.rowData[i].id === j) {
          this.rowData.splice(i, 1);
          break;
        }
      }
    }
    this.getAllData();
    if (jobs.length > 1){
      this.alertify.success('Jobs have been deleted successfully');
    }else{
      this.alertify.success('Job has been deleted successfully');
    }
  }

  getDataChangedListener() {
    this.updateSubs();
    return this.dataChangedListener.asObservable();
  }

  getCandidateChangedListener() {
    return this.candidateChangedListener.asObservable();
  }

  getData() {
    this.updateSubs();
    return this.rowData;
  }

  getCandidates() {
    return this.candidates1;
  }

  updateData(id: any, Data: any) {
    for (let i = 0; i < this.rowData.length; i++) {
      if (this.rowData[i].id === id) {
        this.rowData[i] = Data;
        break;
      }
    }
    this.dataChangedListener.next([...this.rowData]);
    this.alertify.success('Job has been updated successfully');
  }

  addSubmissions() {
    this.getAllData();
    this.alertify.success('Submission(s) added successfully');
  }

  ngOnDestroy() {
    this.docsSub.unsubscribe();
  }
}
