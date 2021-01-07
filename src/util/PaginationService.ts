const PaginationService = {
  execute(totalPages: number, currentPage: number): Array<string> {
    let arr: Array<string> = [];

    arr.push('1');

    if (totalPages > 5) {
      if (currentPage <= 3) {
        arr.push('2');
        arr.push('3');
        arr.push('...');
        arr.push(totalPages.toString());
      } else {
        arr.push('...');
        arr.push((currentPage -1).toString());
        arr.push(currentPage.toString());

        if (currentPage + 1 < totalPages) {
          arr.push((currentPage + 1).toString());
        }

        if (currentPage + 2 < totalPages) {
          arr.push('...');
        }

        if (currentPage < totalPages) {
          arr.push((currentPage).toString());
        }
      }
    } else {
      for (let i = 2; i <= totalPages; i++) {
        arr.push(i.toString());
      }
    }

    return arr;
  }
}

export default PaginationService;
