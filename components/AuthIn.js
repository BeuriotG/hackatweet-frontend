import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';

export function Auth() {
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: signInUsername, password: signInPassword}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          // dispatch(login({username: signInUsername, token: data.token}));

          setSignInUsername('');
          setSignInPassword('');

          // setIsModalVisible(false);
          console.log(data);
        } else {
          setErrorMessage(data.error);
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
          <Button variant="default">Me connecter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connexion</DialogTitle>
            <DialogDescription className="text-red-600 italic">{errorMessage}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="setSignInUsername">Username</Label>
              <Input id="setSignInUsername" name="username" onChange={(e) => setSignInUsername(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="setSignInPassword">Password</Label>
              <Input id="setSignInPassword" type="password" name="password" onChange={(e) => setSignInPassword(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Retour</Button>
            </DialogClose>
            <Button type="submit" onClick={() => handleConnection()}>
              Connexion
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
export default Auth;
