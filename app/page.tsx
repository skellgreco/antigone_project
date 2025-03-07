import { Button } from "@/components/ui/button";
import { redirect } from "next/dist/server/api-utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MainPage() {
  return (
    <>
      <div className="alegreya text-4xl text-center mt-10">
        Σώσε την{" "}
        <div className="inline-block rotate-3 text-yellow-300 ml-1">
          Αντιγόνη
        </div>
      </div>
      <div className="alegreya text-lg text-center mt-5 mx-20 text-slate-300">
        Ένα Quiz για να διευρύνεις τις γνώσεις σου όσον αφορά το μάθημα της
        Αντιγόνης με διασκεδαστικό τρόπο!
      </div>

      <div className="place-self-center">
        <a href="/quiz">
          <Button variant="outline" className="block mt-20 place-self-center w-xs sm:w-xl">
            Παίξε!
          </Button>
        </a>
        <Dialog>
          <DialogTrigger className='mt-10' asChild>
            <Button variant="outline" className="block place-self-center w-xs sm:w-xl">
              Κανόνες
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Κανόνες</DialogTitle>
              <DialogDescription>
                  - Για να απαντήσεις μια ερώτηση έχεις 20 δευτερόλεπτα<br></br>
                  - Αν απαντήσεις λάθος ή ξεμείνεις από χρόνο, χάνεις<br></br>
                  - Το παιχνίδι λήγει όταν έχεις απαντήσει 10 ερωτήσεις σωστά<br></br>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="alegreya text-lg text-center mt-15 mx-20 text-slate-300">
          {process.env.CREATOR}
          <br></br>
          {process.env.GRADE}
          <br></br>
          {process.env.SCHOOL}
        </div>
      </div>
    </>
  );
}
