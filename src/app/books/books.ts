import { IBook, IBookPart } from '../DataStructure';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const BOMInfo: IBook = {
  key:'BOM',
  title: 'The Book of Mormon',
  parts: [
    {
      name: 'Introduction and Witnesses',
      chapters: 1
    },
    {
      name: '1 Nephi',
      chapters: 22
    },
    {
      name: '2 Nephi',
      chapters: 33
    },
    {
      name: 'Jacob',
      chapters: 7
    },
    {
      name: 'Enos',
      chapters: 1
    },
    {
      name: 'Jarom',
      chapters: 1
    },
    {
      name: 'Omni',
      chapters: 1
    },
    {
      name: 'Words of Mormon',
      chapters: 1
    },
    {
      name: 'Mosiah',
      chapters: 29
    },
    {
      name: 'Alma',
      chapters: 63
    },
    {
      name: 'Helaman',
      chapters: 16
    },
    {
      name: '3 Nephi',
      chapters: 30
    },
    {
      name: '4 Nephi',
      chapters: 1
    },
    {
      name: 'Mormon',
      chapters: 9
    },
    {
      name: 'Ether',
      chapters: 15
    },
    {
      name: 'Moroni',
      chapters: 10
    }
  ]
};

const DCInfo: IBook = {
  key:'DC',
  title: 'The Doctrine and Covenants',
  parts: [
    {
      name: 'Title Page',
      chapters: 1
    },
    {
      name: 'Introduction',
      chapters: 1
    },
    {
      name: 'Sections',
      chapters: 138
    },
    {
      name: 'Official Declarations',
      chapters: 2
    }
  ]
};

const PGInfo: IBook = {
  key:'POGP',
  title: 'The Perl of Great Price',
  parts: [
    {
      name: 'Title Page',
      chapters: 1
    },
    {
      name: 'Introduction',
      chapters: 1
    },
    {
      name: 'Moses',
      chapters: 8
    },
    {
      name: 'Abraham',
      chapters: 5
    },
    {
      name: 'Joseph Smith - Matthew',
      chapters: 1
    },
    {
      name: 'Joseph Smith - History',
      chapters: 1
    },
    {
      name: 'Articles of Faith',
      chapters: 1
    }
  ]
};

const OTInfo: IBook = {
  key:'OT',
  title: 'The Old Testament',
  parts: [
    {
      name: 'Title Page',
      chapters: 1
    },
    {
      name: 'Introduction',
      chapters: 1
    },
    {
      name: 'Moses',
      chapters: 8
    },
    {
      name: 'Abraham',
      chapters: 5
    },
    {
      name: 'Joseph Smith - Matthew',
      chapters: 1
    },
    {
      name: 'Joseph Smith - History',
      chapters: 1
    },
    {
      name: 'Articles of Faith',
      chapters: 1
    }
  ]
};

const NTInfo: IBook = {
  key:'NT',
  title: 'The New Testament',
  parts: [
    {
      name: 'Title Page',
      chapters: 1
    },
    {
      name: 'Introduction',
      chapters: 1
    },
    {
      name: 'Moses',
      chapters: 8
    },
    {
      name: 'Abraham',
      chapters: 5
    },
    {
      name: 'Joseph Smith - Matthew',
      chapters: 1
    },
    {
      name: 'Joseph Smith - History',
      chapters: 1
    },
    {
      name: 'Articles of Faith',
      chapters: 1
    }
  ]
};

const SUPPORTED = [
  {
    key:'BOM',
    label: 'The Book of Mormon'
  },
  {
    key:'OT',
    label: 'The Old Testament'
  },
  {
    key:'NT',
    label: 'The New Testament'
  },
  {
    key:'POGP',
    label: 'The Perl of Great Price'
  },
  {
    key:'DC',
    label: 'The Doctrine and Covenants'
  }
];

const BOOKINFO: {[title: string]: Book} = {
  'The Book of Mormon': BOMInfo,
  'The Old Testament': OTInfo,
  'The New Testament': NTInfo,
  'The Perl of Great Price': PGInfo,
  'The Doctrine and Covenants': DCInfo,
  'BOM': BOMInfo,
  'OT': OTInfo,
  'NT': NTInfo,
  'POGP': PGInfo,
  'DC': DCInfo
};

class Book {
  public key: string;
  public title: string;
  public parts: IBookPart[];
  public totalChapterCount: number;

  constructor(private book: IBook) {
    this.key = book.key;
    this.title = book.title;
    this.parts = book.parts;
    this.totalChapterCount = this.parts
      .map(part => {
        part.chapterArray = Array(part.chapters).fill().map((x,i) => return i + 1;);
        return part.chapters;
      })
      .reduce((accumulator: number, chapters: number) => accumulator + chapters);
  }

  getChapterPosition(part: string, chapter: number) {
    let position = 0;
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].name !== part) {
        position = position + this.parts[i].chapters;
      } else {
        position = position + chapter;
        break;
      }
    }
    return position;
  }
}

const BOM: Book = new Book(BOMInfo);

console.log(`Introduction and Witnesses, 1: ${BOM.getChapterPosition('Introduction and Witnesses', 1)}`);
console.log(`1 Nephi, 1: ${BOM.getChapterPosition('1 Nephi', 1)}`);
console.log(`Jarom, 1: ${BOM.getChapterPosition('Jarom', 1)}`);
console.log(`Mosiah, 22: ${BOM.getChapterPosition('Mosiah', 22)}`);

export {
  BOM,
  SUPPORTED,
  Book,
  BOOKINFO
}
