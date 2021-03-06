
package jsontools;

import entitys.Author;
import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

public class AuthorJsonBuilder {
    public JsonArray getAuthorsJsonArray(List<Author> listAuthor){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i=0;i<listAuthor.size();i++){
            jab.add(getAuthorJsonObject(listAuthor.get(i)));
        }
        return jab.build();
    }
    public JsonObject getAuthorJsonObject(Author author){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", author.getId());
        job.add("firstname", author.getFirstname());
        job.add("lastname", author.getLastname());
        job.add("birthYear", author.getBirthYear());
        return job.build();
    }
}
