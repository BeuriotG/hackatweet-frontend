import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';

export function Auth() {
  const [signUpName, setSignUpName] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstname: signUpName, username: signUpUsername, password: signUpPassword}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          // dispatch(login({username: signUpUsername, token: data.token}));
          setSignUpName('');
          setSignUpUsername('');
          setSignUpPassword('');
          console.log(data);
        }
      });
  };

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Créer compte</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Créer mon compte</DialogTitle>
            {/* <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="setSignUpName">Prénom</Label>
              <Input id="setSignUpName" name="name" onChange={(e) => setSignUpName(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="setSignUpUsername">Username</Label>
              <Input id="setSignUpUsername" name="username" onChange={(e) => setSignUpUsername(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="setSignUpPassword">Password</Label>
              <Input id="setSignUpPassword" type="password" name="password" onChange={(e) => setSignUpPassword(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Retour</Button>
            </DialogClose>
            <Button type="submit" onClick={() => handleRegister()}>
              Créer mon compte
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
export default Auth;
