'use strict';

describe('Тестирум контроллер BooksController', function () {

  var dfd;
  var ctrl;
  var $scope;
  var $books;
  var $rootScope;
  var localStorageService;

  beforeEach(module('ktest2'));

  beforeEach(inject(function (_$rootScope_, $controller, $q, _localStorageService_, _$books_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    ctrl = $controller('BooksController', {
      $scope: $scope
    });
    localStorageService = _localStorageService_;
    $books = _$books_;
    dfd = $q.defer();
    // $mdDialog = _$mdDialog_;
    // $navbar = _$navbar_;
    // $notification = _$notification_;
    spyOn(ctrl, 'getBooks').and.callThrough();
    spyOn($books, 'getBooks').and.returnValue(dfd.promise);
    spyOn($books, 'deleteBook').and.returnValue(dfd.promise);
  }));


  it("Проверяем контроллер на существование", function () {
    expect(ctrl).toBeDefined();
  });

  describe('Тестируем методы контроллера', function () {

    describe('Тестируем метод sortFunc', function () {

      it('Первый раз передаем значение для сортировки: ctrl.sort должно стать равным переданному занчениею, а vm.sortDesc должно стать false', function () {
        var sortBy = 'data';

        ctrl.sort = '';
        ctrl.sortDesc = false;
        ctrl.sortFunc(sortBy);

        expect(ctrl.sortDesc).toBe(false);
        expect(ctrl.sort).toBe(sortBy);
      });

      it('Второй раз передаем значение для сортировки: ctrl.sort должно остаться равным переданному занчениею, а vm.sortDesc должно стать true', function () {
        var sortBy = 'data';

        ctrl.sort = sortBy;
        ctrl.sortDesc = false;
        ctrl.sortFunc(sortBy);

        expect(ctrl.sortDesc).toBe(true);
        expect(ctrl.sort).toBe(sortBy);
      });

      it('Третий раз передаем значение для сортировки: ctrl.sort должно стать равным пустрой строке, а vm.sortDesc должно стать false', function () {
        var sortBy = 'data';

        ctrl.sort = sortBy;
        ctrl.sortDesc = true;
        ctrl.sortFunc(sortBy);

        expect(ctrl.sortDesc).toBe(false);
        expect(ctrl.sort).toBe('');
      });

    });
    describe('Тестируем метод getBooks', function () {
      it('Должен быть вызыван метод', function () {

        ctrl.getBooks();
        expect($books.getBooks).toHaveBeenCalled();
      });
    });
    describe('Тестируем метод deleteBook', function () {
      it('Должен быть вызыван метод', function () {

        ctrl.deleteBook();
        expect($books.deleteBook).toHaveBeenCalled()
      });
    });
    describe('Тестируем метод activate', function () {
      it('Должен достать данные из LS и звызывать getBooks', function () {
        var sort = 'sort';
        var sortDesc = 'sortDesc';
        localStorageService.set('sort', sort);
        localStorageService.set('sortDesc', sortDesc);
        ctrl.activate();
        expect(ctrl.getBooks).toHaveBeenCalled();
        expect(ctrl.sort).toEqual(sort);
        expect(ctrl.sortDesc).toEqual(sortDesc);
      });
    });

  });

});
