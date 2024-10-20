const demo = angular.module("demo", []);
demo.controller("demoCtrl", function ($scope) {
  $scope.title = "Employee Form";

  const data = [
    { firstName: "", lastName: "", jobTitle: "", yoe: "" },
    { firstName: "", lastName: "", jobTitle: "", yoe: "" },
  ];

  const localData = localStorage.getItem("data");
  if (!localData) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  $scope.data = JSON.parse(localData) || [];
  $scope.submit = function () {
    if ($scope.firstName && $scope.lastName && $scope.jobTitle && $scope.yoe) {
      $scope.data.push({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        jobTitle: $scope.jobTitle,
        yoe: $scope.yoe,
      });
      localStorage.setItem("data", JSON.stringify($scope.data));
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.jobTitle = "";
      $scope.yoe = "";
    }
  };
});
