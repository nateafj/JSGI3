
  function hard2() {
    const pii = {
      name: "Success Odoemena",
      ssn: "999-99-9999",
    };
    function getName() {
      return pii.name;
    }
    return {
      getName: getName,
    };
  }
  var hard = hard2();
  console.log(hard.getName());