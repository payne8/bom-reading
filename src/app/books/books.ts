import { IBook, IBookPart } from '../DataStructure';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const BOMInfo: IBook = {
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
  'The Book of Mormon',
  'The Old Testament',
  'The New Testament',
  'The Perl of Great Price',
  'The Doctrine and Covenants',
];

const BOOKINFO = {
  'The Book of Mormon': BOMInfo,
  'The Old Testament': OTInfo,
  'The New Testament': NTInfo,
  'The Perl of Great Price': PGInfo,
  'The Doctrine and Covenants': DCInfo
};

class Book {
  public title: String;
  public parts: IBookPart[];
  public totalChapterCount: number;

  constructor(private book: IBook) {
    this.title = book.title;
    this.parts = book.parts;
    this.totalChapterCount = this.parts
      .map(part => part.chapters)
      .reduce((accumulator: number, chapters: number) => accumulator + chapters);
  }
}

const BOM: Book = new Book(BOMInfo);

export {
  BOM,
  SUPPORTED,
  Book,
  BOOKINFO
}
