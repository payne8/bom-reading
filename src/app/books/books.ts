import { IBook, IBookPart, IChapter } from '../DataStructure';
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
      name: 'Epistle Dedicatory',
      chapters: 1
    },
    {
      name: 'Genesis',
      chapters: 50
    },
    {
      name: 'Exodus',
      chapters: 40
    },
    {
      name: 'Leviticus',
      chapters: 27
    },
    {
      name: 'Numbers',
      chapters: 36
    },
    {
      name: 'Deuteronomy',
      chapters: 34
    },
    {
      name: 'Joshua',
      chapters: 24
    },
    {
      name: 'Judges',
      chapters: 21
    },
    {
      name: 'Ruth',
      chapters: 4
    },
    {
      name: '1 Samuel',
      chapters: 31
    },
    {
      name: '2 Samuel',
      chapters: 24
    },
    {
      name: '1 Kings',
      chapters: 22
    },
    {
      name: '2 Kings',
      chapters: 25
    },
    {
      name: '1 Chronicles',
      chapters: 29
    },
    {
      name: '2 Chronicles',
      chapters: 36
    },
    {
      name: 'Ezra',
      chapters: 10
    },
    {
      name: 'Nehemiah',
      chapters: 13
    },
    {
      name: 'Esther',
      chapters: 10
    },
    {
      name: 'Job',
      chapters: 42
    },
    {
      name: 'Psalms',
      chapters: 150
    },
    {
      name: 'Proverbs',
      chapters: 31
    },
    {
      name: 'Ecclesiastes',
      chapters: 12
    },
    {
      name: 'Song of Solomon',
      chapters: 8
    },
    {
      name: 'Isaiah',
      chapters: 66
    },
    {
      name: 'Jeremiah',
      chapters: 52
    },
    {
      name: 'Lamentations',
      chapters: 5
    },
    {
      name: 'Ezekiel',
      chapters: 48
    },
    {
      name: 'Daniel',
      chapters: 12
    },
    {
      name: 'Hosea',
      chapters: 14
    },
    {
      name: 'Joel',
      chapters: 3
    },
    {
      name: 'Amos',
      chapters: 9
    },
    {
      name: 'Obadiah',
      chapters: 1
    },
    {
      name: 'Jonah',
      chapters: 4
    },
    {
      name: 'Micah',
      chapters: 7
    },
    {
      name: 'Nahum',
      chapters: 3
    },
    {
      name: 'Habakkuk',
      chapters: 3
    },
    {
      name: 'Zephaniah',
      chapters: 3
    },
    {
      name: 'Haggai',
      chapters: 2
    },
    {
      name: 'Zechariah',
      chapters: 14
    },
    {
      name: 'Malachi',
      chapters: 4
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
      name: 'Matthew',
      chapters: 28
    },
    {
      name: 'Mark',
      chapters: 16
    },
    {
      name: 'Luke',
      chapters: 24
    },
    {
      name: 'John',
      chapters: 21
    },
    {
      name: 'Acts',
      chapters: 28
    },
    {
      name: 'Romans',
      chapters: 16
    },
    {
      name: '1 Corinthians',
      chapters: 16
    },
    {
      name: '2 Corinthians',
      chapters: 13
    },
    {
      name: 'Galatians',
      chapters: 6
    },
    {
      name: 'Ephesians',
      chapters: 6
    },
    {
      name: 'Philippians',
      chapters: 4
    },
    {
      name: 'Colossians',
      chapters: 4
    },
    {
      name: '1 Thessalonians',
      chapters: 5
    },
    {
      name: '2 Thessalonians',
      chapters: 3
    },
    {
      name: '1 Timothy',
      chapters: 6
    },
    {
      name: '2 Timothy',
      chapters: 4
    },
    {
      name: 'Titus',
      chapters: 3
    },
    {
      name: 'Philemon',
      chapters: 1
    },
    {
      name: 'Hebrews',
      chapters: 13
    },
    {
      name: 'James',
      chapters: 5
    },
    {
      name: '1 Peter',
      chapters: 5
    },
    {
      name: '2 Peter',
      chapters: 3
    },
    {
      name: '1 John',
      chapters: 5
    },
    {
      name: '2 John',
      chapters: 1
    },
    {
      name: '3 John',
      chapters: 1
    },
    {
      name: 'Jude',
      chapters: 1
    },
    {
      name: 'Revelation',
      chapters: 22
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

const BOOKINFO: {[title: string]: IBook} = {
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
  public chapters: IChapter[];

  constructor(private book: IBook) {
    this.key = book.key;
    this.title = book.title;
    this.parts = book.parts;
    this.totalChapterCount = this.parts
      .map(part => {
        part.chapterArray = Array(part.chapters).fill(0).map((x,i) => {return i + 1;});
        return part.chapters;
      })
      .reduce((accumulator: number, chapters: number) => accumulator + chapters);
    this.chapters = [];
    for (let i in this.parts) {
      let part: IBookPart = this.parts[i];
      let curChapters: IChapter[] = part.chapterArray.map((chapter: number) => {
        return {
          partName: part.name,
          chapter: chapter
        };
      });
      this.chapters = this.chapters.concat(curChapters);
    }
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

  getChaptersFromPosition(startPosition: number, count: number=1): IChapter[] {
    if (startPosition >= this.totalChapterCount) {
      return [
        {
          partName: this.parts[this.parts.length - 1].name,
          chapter: this.parts[this.parts.length - 1].chapters
        }
      ];
    } else {
      return this.chapters.slice(startPosition - 1, (startPosition - 1) + count);
    }
  }
}

const BOM: Book = new Book(BOMInfo);

// console.log(BOM.chapters);
// console.log(BOM.getChaptersFromPosition(1));
// console.log(BOM.getChaptersFromPosition(82));
// console.log(BOM.getChaptersFromPosition(82, 5));
// console.log(BOM.getChaptersFromPosition(1, 5));

// console.log(`Introduction and Witnesses, 1: ${BOM.getChapterPosition('Introduction and Witnesses', 1)}`);
// console.log(`1 Nephi, 1: ${BOM.getChapterPosition('1 Nephi', 1)}`);
// console.log(`Jarom, 1: ${BOM.getChapterPosition('Jarom', 1)}`);
// console.log(`Mosiah, 22: ${BOM.getChapterPosition('Mosiah', 22)}`);

export {
  BOM,
  SUPPORTED,
  Book,
  BOOKINFO
}
