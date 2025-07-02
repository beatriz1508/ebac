
class ATM {
#balance;

constructor(initialBalance) {
  this.#balance = initialBalance;
}

deposit(amount) {
  if (amount > 0) {
  this.#balance += amount;
}
}

withdraw(amount) {
  if (amount > 0 && amount <= this.#balance) {
    this.#balance -= amount;
  } else {
    alert("insufficient funds or invalid amount");
  }
}

getBalance() {
  return this.#balance;
}
}

const atm = new ATM(0);

function updateBalance() {
  document.getElementById("balance").textContent = atm.getBalance();
}

function deposit() {
  const amount = Number(document.getElementById("depositAmount").value);
  atm.deposit(amount);
  updateBalance();
  document.getElementById("depositAmount").valeu = '';
}

function withdraw() {
  const amount = Number(document.getElementById("withdrawAmount").value);
  atm.withdraw(amount);
  updateBalance();
  document.getElementById("withdrawAmount").value = '';
}
