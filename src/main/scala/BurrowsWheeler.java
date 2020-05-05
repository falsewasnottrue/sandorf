import java.io.FileInputStream;
        import java.io.FileNotFoundException;
        import java.io.IOException;
        import java.nio.channels.*;
        import java.nio.*;
        import java.io.*;
        import java.util.*;

        import javax.swing.JFileChooser;

public class BurrowsWheeler {

    /**
     * This inner class represents the input block sequence/file being
     * transformed for compression. All <code>Rotatable</code> objects
     * in a BWTransform are presumably constructed from the same char array,
     * but with different indexes. Thus they all share the same array, but
     * each <code>Rotatable</code> has a different index that will be
     * used in the compareTo method and will be used in client code
     * as part of the tranform process. The index used in construction
     * represents the first character of a <code>Rotatable</code>. For example,
     * index of zero uses the first index/char of the array and an index
     * of three represents three shifts/rotates so that the char at index 3
     * is the first character in terms of printing or comparisons.
     * @author ola
     *
     */
    public class Rotatable implements Comparable<Rotatable>{

        private char[] myArray;
        private int    myIndex;
        private String myString;

        /**
         * Construct from an array of chars and an index, the index
         * used to represent the true 'start' of the rotated-array of chars.
         * @param list
         * @param index
         */
        public Rotatable(char[] list, int index){
            myArray = list;
            myIndex = index;
        }

        /**
         * Return this object's index/first char (zero represents true first).
         * @return index used at construction, first char of rotated/shifted sequence
         */
        public int getIndex(){
            return myIndex;
        }

        /**
         * Return the last char of the array, where last is relative to the index
         * representing the first character. For an index of zero, last should
         * have index array.length - 1.
         * @return last char of this object
         */
        public char lastChar(){
            return myArray[(myIndex + myArray.length - 1) % myArray.length];
        }

        /**
         * Compare two Rotatable objects and return negative value if this
         * one is less than parameter, positive if this is larger, and zero
         * if they represent the same sequence. It's possible that all
         * characters of the (rotated) char-sequence are compared, each
         * Rotatable starts the comparison at its appropriate index.
         * @return int representing value of comparison
         */
        public int compareTo(Rotatable b) {
            int aindex = myIndex;
            int bindex = b.myIndex;
            int length = myArray.length;
            /**
             * TODO: compare a.myArray values with b.myArray values
             * using the start indexes of each as appropriate and returning
             * negative, 0, positive depending on whether this sequence
             * is less than, equal to, or greater than sequence b, respectively.
             */



            return 0;  // initially everything is equal
        }

        /**
         * Convert to string once and store for all subsequent retrievals; the
         * string represents a rotated view, so the first character of the
         * returned string has the index used at construction time.
         * @return a String form of this object, string conversion done once
         */
        public String toString(){
            if (myString == null){
                StringBuilder sb= new StringBuilder();
                sb.append(myIndex + "\t: ");
                int index = myIndex;
                for(int k=0; k < myArray.length; k++){
                    sb.append((char) myArray[index]);
                    index++;
                    if (index >= myArray.length) index = 0;
                }
                myString = sb.toString();
            }
            return myString;
        }

    }


    public int BLOCK_SIZE = 1 << 15;   // number of chars in a block
    private int[] myIndexes;           // used in move-to-front
    private int myFirst;               // store value between method calls

    /**
     * Construct a Burrows-Wheeler transformer that can read/transform,
     * untransform, and both move-to-front and undo move-to-front.
     */
    public BurrowsWheeler(){
        myIndexes = new int[256];
        myFirst = -1;
        resetIndexes();
    }

    /**
     * Set myIndexes appropriately so that move-to-front and unmove-to-front work,
     * i.e., so that myIndexes[k] == k for all valid values of k.
     */
    private void resetIndexes(){
        for(int k=0; k < myIndexes.length; k++){
            myIndexes[k] = k;
        }
    }


    /**
     * Use the reverse/un Burrows-Wheeler transform to decode characters,
     * returning the decoded characters -- runs in O(n) time for an n-element array.
     * @param list is the last-chars of a BW-transformed sequence
     * @param first is the index in the sorted sequence of chars at which
     * the originally read/encoded sequence occurs.
     * @return a BW decoded array of characters
     */
    public char[] decode(char[] list, int first){

        int[] translate = new int[list.length];
        int[] sums = new int[256];
        for(int k=0; k < list.length; k++){
            sums[list[k]+1]++;
        }
        for(int k=1; k < sums.length; k++){
            sums[k] += sums[k-1];
        }
        for(int k=0; k < list.length; k++){
            int index = sums[list[k]]++;
            translate[index] = k;
        }
        char[] reconstruct = new char[list.length];
        for (int k = 0; k <list.length; k++) {
            first = translate[first];
            reconstruct[k] = list[first];
        }
        return reconstruct;
    }

    public static void main(String[] args) {
        final String text = "07083E0°55°19N28..*223";
        final int key = 20;

        final char[] res = new BurrowsWheeler().decode(text.toCharArray(), key);
        final String result = new String(res);

        System.out.println(result);
    }
}